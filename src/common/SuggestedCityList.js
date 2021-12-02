import { fecthCity } from "../stores/currentCitySlicer";
import { CityHeading } from "../styled/Heading";
import Suspense from "./Suspense";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const popularityCities = ["New York", "Paris", "Tokyo", "Sydney"];
  return popularityCities.map((city, index) => {
    return (
      <Suspense key={index} delay={index * 300}>
        <CityHeading
          onClick={() => {
            dispatch(fecthCity(city));
            history.push({
              search: "?city=" + city,
            });
          }}
        >
          {city}
        </CityHeading>
      </Suspense>
    );
  });
};
