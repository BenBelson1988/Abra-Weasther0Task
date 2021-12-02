function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./../Pics/weathericons/", false, /\.(png)$/)
);
export default (props) => {
  return <img src={images[props.iconNumber].default} alt={props.iconNumber} />;
};
