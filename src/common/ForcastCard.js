import { FiveDayCard } from "../styled/Divs";
import { DateHeading } from "../styled/Heading";
import WeatherIcon from "./WeatherIcon";
import { useSelector } from "react-redux";
import { FtoC } from "./Funcs";

export default (props) => {
  const degree = useSelector(({ common }) => {
    return common.degrees || [];
  });

  function getDayName(dateStr, locale) {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  }
  var tempDay = props.children[0].substring(0, 10);
  var day = getDayName(tempDay, "en-US");
  return (
    <FiveDayCard>
      <DateHeading>{day}</DateHeading>
      <WeatherIcon iconNumber={props.children[3]} />
      <DateHeading>
        {degree === "F" ? props.children[2] : FtoC(props.children[2])}
        {degree} -{" "}
        {degree === "F" ? props.children[1] : FtoC(props.children[1])}
        {degree}
      </DateHeading>
    </FiveDayCard>
  );
};
