import { DateHeading } from "../styled/Heading";

export default () => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var miniMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let newDate = new Date(),
    hours = newDate.getHours(),
    minutes = newDate.getMinutes(),
    day = days[newDate.getDay()],
    date = newDate.getDate(),
    month = miniMonth[newDate.getMonth()],
    year = newDate.getFullYear();

  return (
    <DateHeading>
      {hours}:{minutes} - {day}, {date} {month} - {year}
    </DateHeading>
  );
};
