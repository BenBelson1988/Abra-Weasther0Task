import Suspense from "../common/Suspense";
import Search from "../common/Search";
import SuggestedCityList from "../common/SuggestedCityList";
import {
  FlexRowSpaceMax,
  FlexColumnSpace,
  HomeDiv,
  LeftHome,
  RightHome,
  FlexRow,
} from "../styled/Divs";
import { Hr } from "../styled/Hr";
import {
  RightCurrentWeatherHeading,
  UpperLeftHeading,
} from "../styled/Heading";
import RightBottomWeather from "../common/RightBottomWeather";
import LeftDownDiv from "../common/LeftDownDiv";
import AddToFavorits from "../common/AddToFavorits";
import FiveDayForcast from "../common/FiveDayForcast";
import { useSelector } from "react-redux";
import { Loader } from "../styled/Loader";
import ErrorModal from "../common/ErrorModal";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const cityDetails = useSelector(({ currentCity }) => {
    return currentCity || [];
  });
  history.push({
    search: "?city=" + cityDetails.currentCity.name,
  });
  const favoritesCityArray = useSelector(({ cityList }) => {
    return cityList || [];
  });

  const theme = useSelector(({ common }) => {
    return common.theme || [];
  });

  if (theme === "light") document.body.classList.add("light");
  else document.body.classList.remove("light");

  const loadingCity = Object.keys(cityDetails.currentCity).length === 0;
  const loadingState = cityDetails.isLoading;
  const error = cityDetails.error;
  let cityData = Object.keys(cityDetails.currentCondition).length === 0;
  let errorMsg = cityData
    ? "Limit of API request has exceeded"
    : "There is no Such city, please try again using the auto-complete.";

  return (
    <HomeDiv theme={theme}>
      <LeftHome>
        {error && <ErrorModal msg={errorMsg} />}
        {loadingState && <Loader />}
        {!loadingState && !cityData && (
          <FlexColumnSpace>
            <FlexRowSpaceMax>
              <UpperLeftHeading>The Weather</UpperLeftHeading>
              <AddToFavorits
                cityList={favoritesCityArray}
                cityDetails={cityDetails}
              />
            </FlexRowSpaceMax>
            <FlexRow>
              <FiveDayForcast forcast={cityDetails.fiveDayForcast} />
            </FlexRow>
            <LeftDownDiv
              cityWeather={cityDetails.currentCondition[0]}
              cityName={cityDetails.currentCity.name}
            />
          </FlexColumnSpace>
        )}
      </LeftHome>

      <RightHome>
        <Search />
        <SuggestedCityList />
        <Suspense delay={1200}>
          <Hr width="17vw" />
        </Suspense>
        {!loadingCity && (
          <>
            <Suspense delay={1500}>
              <RightCurrentWeatherHeading>
                Weakly Weather
              </RightCurrentWeatherHeading>
            </Suspense>
            <Suspense delay={1800}>
              <RightBottomWeather forcast={cityDetails.fiveDayForcast} />
            </Suspense>
          </>
        )}
      </RightHome>
    </HomeDiv>
  );
};
