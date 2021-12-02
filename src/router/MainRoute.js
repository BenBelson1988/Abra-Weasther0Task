import { Route, Redirect, Switch } from "react-router-dom";
import Home from "../screens/Home";
import Favorits from "../screens/Favorites";
import { getUserLocation } from "../stores/currentCitySlicer";
import { useDispatch } from "react-redux";

export default () => {
  const dispacth = useDispatch();
  dispacth(getUserLocation());
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={"/home"} />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/favorits">
        <Favorits />
      </Route>
      <Route path="/">
        <Redirect to={"/home"} />
      </Route>
    </Switch>
  );
};
