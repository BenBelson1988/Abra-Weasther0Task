import { useState, useEffect } from "react";
import { LikedButton } from "../styled/Buttons";
import { FlexColumn } from "../styled/Divs";
import { AddHeading } from "../styled/Heading";
import { useDispatch } from "react-redux";
import {
  addCityToFavorits,
  removeCityFromFavorites,
} from "../stores/favoritesSlicer";

export default (props) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [ticking, setTicking] = useState(false);
  const [showlikedMsg, setShowlikedMsg] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => ticking && setCount(count + 1), 1e3 * 3);
    return () => clearTimeout(timer);
  });
  let tempLiked = false;
  var cityArray = props.cityList.cityList;
  if (cityArray.length !== 0) {
    for (var i = 0; i < cityArray.length; i++) {
      if (props.cityDetails.currentCity.key === cityArray[i].currentCity.key) {
        tempLiked = true;
        break;
      }
    }
  }

  useEffect(() => {
    if (count === 1) {
      setCount(0);
      setTicking(false);
      setShowlikedMsg(false);
    }
  });

  const addRemoveFavorites = () => {
    if (tempLiked) {
      dispatch(removeCityFromFavorites(props.cityDetails.currentCity.key));
    } else {
      dispatch(addCityToFavorits(props.cityDetails));
    }
    setShowlikedMsg(true);
    setTicking(true);
  };

  return (
    <FlexColumn>
      <LikedButton liked={tempLiked} onClick={() => addRemoveFavorites()} />
      {showlikedMsg && (
        <AddHeading>
          {!tempLiked ? "Removed from favorits" : "Added to favorits"}
        </AddHeading>
      )}
    </FlexColumn>
  );
};
