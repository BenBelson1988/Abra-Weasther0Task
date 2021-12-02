import FavoritsList from "../common/FavoritsList";
import { FavoritsWrapper, FlexColumn, HomeDiv } from "../styled/Divs";
import { FavoritsHeading, RightCurrentWeatherHeading } from "../styled/Heading";
import { useSelector } from "react-redux";

export default () => {
  const favoritesCityArray = useSelector(({ cityList }) => {
    return cityList || [];
  });
  const theme = useSelector(({ common }) => {
    return common.theme || [];
  });

  if (theme === "light") document.body.classList.add("light");
  else document.body.classList.remove("light");

  return (
    <HomeDiv favorites>
      <FlexColumn>
        <FavoritsHeading>My Favorites Cities</FavoritsHeading>
        <FavoritsWrapper>
          {favoritesCityArray.cityList.length !== 0 && (
            <FavoritsList favoritsList={favoritesCityArray.cityList} />
          )}
          {favoritesCityArray.cityList.length === 0 && (
            <RightCurrentWeatherHeading>
              There are still no favorite cities.
            </RightCurrentWeatherHeading>
          )}
        </FavoritsWrapper>
      </FlexColumn>
    </HomeDiv>
  );
};
