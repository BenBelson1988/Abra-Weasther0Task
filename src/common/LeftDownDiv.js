import { BottomLeftDiv, FlexCenteredColumn } from "../styled/Divs";
import { BigTemperature, BigCity, DateHeading } from "../styled/Heading";
import DateNow from "./DateNow";
import { useSelector } from "react-redux";
import { FtoC } from "./Funcs";

export default (props) => {
  const degree = useSelector(({ common }) => {
    return common.degrees || [];
  });
  var temp = props.cityWeather.Temperature;

  return (
    <BottomLeftDiv>
      <BigTemperature>
        {degree === "F" ? temp.Imperial.Value : FtoC(temp.Imperial.Value)}
        {degree}
      </BigTemperature>
      <FlexCenteredColumn>
        <BigCity>{props.cityName}</BigCity>
        <DateNow />
      </FlexCenteredColumn>
      <DateHeading>{props.cityWeather.WeatherText}</DateHeading>
    </BottomLeftDiv>
  );
};
