import ForcastCard from "./ForcastCard";

export default (props) => {
  const forcast = props.forcast;

  return forcast.map((element, index) => {
    let Temp = element.Temperature;
    return (
      <ForcastCard key={index}>
        {element.Date}
        {Temp.Maximum.Value}
        {Temp.Minimum.Value}
        {element.Day.Icon}
      </ForcastCard>
    );
  });
};
