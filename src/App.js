import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Header from "./common/Header";
import MainRoute from "./router/MainRoute";
import currentCitySlicer from "./stores/currentCitySlicer";
import favoritesSlicer from "./stores/favoritesSlicer";
import commonSlicer from "./stores/commonSlicer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  currentCity: currentCitySlicer,
  cityList: favoritesSlicer,
  common: commonSlicer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <>
            <Header />
            <MainRoute />
          </>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
