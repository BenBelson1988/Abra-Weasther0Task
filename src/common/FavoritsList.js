import FavoriteCard from "./FavoriteCard";
import Suspense from "./Suspense";
import WeatherIcon from "./WeatherIcon";
import { useSelector } from "react-redux";
import { FtoC } from "./Funcs";

export default (props) => {
  const degree = useSelector(({ common }) => {
    return common.degrees || [];
  });

  let cityList = props.favoritsList;

  return cityList.map((element, index) => {
    let currentCondition = element.currentCondition[0];
    return (
      <Suspense key={index} delay={index * 200}>
        <FavoriteCard>
          {element.currentCity.name}
          <WeatherIcon iconNumber={currentCondition.WeatherIcon} />
          {degree === "F"
            ? currentCondition.Temperature.Imperial.Value + degree
            : FtoC(currentCondition.Temperature.Imperial.Value) + degree}
        </FavoriteCard>
      </Suspense>
    );
  });
};
