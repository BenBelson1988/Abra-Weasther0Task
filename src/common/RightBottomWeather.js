import { FlexRowSpace, RightBottomDiv } from "../styled/Divs";
import { WeeklyListHeading } from "../styled/Heading";

export default (props) => {
  function getDayName(dateStr, locale) {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  }
  return (
    <RightBottomDiv>
      {props.forcast.map((day, index) => {
        return (
          <FlexRowSpace key={index}>
            <WeeklyListHeading day>
              {getDayName(day.Date.substring(0, 10), "en-US").substring(0, 3)}
            </WeeklyListHeading>
            <WeeklyListHeading>D - {day.Day.IconPhrase}</WeeklyListHeading>
            <WeeklyListHeading>N - {day.Night.IconPhrase}</WeeklyListHeading>
          </FlexRowSpace>
        );
      })}
      )
    </RightBottomDiv>
  );
};
