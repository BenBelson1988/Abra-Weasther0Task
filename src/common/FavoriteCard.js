import { FavoriteDiv } from "../styled/Divs";
import { fecthCity } from "../stores/currentCitySlicer";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <FavoriteDiv
      onClick={() => {
        dispatch(fecthCity(props.children[0]));
        history.push("/home");
      }}
    >
      <h2>{props.children[0]}</h2>
      <h3>{props.children[1]}</h3>
      <h4>{props.children[2]}</h4>
    </FavoriteDiv>
  );
};
