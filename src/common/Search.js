import { useState } from "react";
import { SearchButton } from "../styled/Buttons";
import { FlexRowSpace } from "../styled/Divs";
import { SearchInput } from "../styled/Inputs";
import { AutoCompleteList, ListItem } from "../styled/List";
import { useDispatch } from "react-redux";
import { fecthCity } from "../stores/currentCitySlicer";
import SearchError from "./SearchError";
import { useHistory } from "react-router-dom";

const fecthList = async (text) => {
  const apiKey = "e2lIL9S8qeSQrzOIEA86d713UfSTo0xw";
  //"GbB2PYmVov1JpcVGu6GaDr3EFWxHLY18";" "zLax8EAeTtTs1nNaEriphk2WIsFSje0S"
  //
  let url =
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";
  let query = `?apikey=${apiKey}&q=${text}`;
  try {
    const res = await fetch(url + query);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(false);

  const autoCopmlite = async (e) => {
    if (!e) {
      setSuggestions([]);
      setText("");
      return;
    }
    if (e.length === 1) {
      setText(e);
      return;
    }
    setText(e);
    let tempList = await fecthList(e);
    if (tempList === 0) return;
    let itemsList = tempList.map((item) => {
      return item.LocalizedName;
    });
    let matches = itemsList.filter((items) => {
      const regex = new RegExp(`^${e}`, "gi");
      return items.match(regex);
    });
    setSuggestions(matches);
  };

  const setSelection = (suggest) => {
    setText(suggest);
    setSuggestions([]);
    dispatch(fecthCity(suggest));
    history.push({
      search: "?city=" + suggest,
    });
  };

  const getCity = (city) => {
    setSuggestions([]);
    if (city.length === 0 || city.length === 1) setError(true);
    else {
      dispatch(fecthCity(city));
      history.push({
        search: "?city=" + city,
      });
    }
  };

  return (
    <FlexRowSpace>
      {error && (
        <SearchError
          setError={setError}
          msg="Please fill at least 2 characters in order to search city."
        />
      )}
      <SearchInput
        onChange={(e) => autoCopmlite(e.target.value)}
        placeholder="Search for location"
        value={text}
      />
      <AutoCompleteList>
        {suggestions &&
          suggestions.map((suggest, i) => {
            return (
              <ListItem
                key={i}
                onClick={() => {
                  setSelection(suggest);
                }}
              >
                {suggest}
              </ListItem>
            );
          })}
      </AutoCompleteList>
      <SearchButton onClick={() => getCity(text)} />
    </FlexRowSpace>
  );
};
