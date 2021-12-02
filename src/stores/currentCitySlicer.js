import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCity: {
    name: "",
    key: "",
    text: "",
  },
  currentCondition: {},
  fiveDayForcast: [],
  isLoading: false,
  error: "",
};

const apiKey = "e2lIL9S8qeSQrzOIEA86d713UfSTo0xw";
//"GbB2PYmVov1JpcVGu6GaDr3EFWxHLY18";
//"zLax8EAeTtTs1nNaEriphk2WIsFSje0S";

export const getUserLocation = createAsyncThunk(
  "city/getUserLocation",
  async (_, { rejectWithValue }) => {
    let getUserurl = "http://ip-api.com/json/?fields=city";
    const res = await fetch(getUserurl);
    const data = await res.json();
    let city = data.city;
    if (city === "Nahariya") city = "Nahariyya"; //I'm from nahariya and it returns geo location of `Nahariya` in india =]
    let baseUrl =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
    let query = `?apikey=${apiKey}&q=${city}`;
    try {
      const resTwo = await fetch(baseUrl + query);
      const dataTwo = await resTwo.json();
      let cityKey = dataTwo[0].Key;
      let fiveDayUrl =
        "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
      let fiveDayQuery = `${cityKey}?apikey=${apiKey}`;
      const FiveDayRes = await fetch(fiveDayUrl + fiveDayQuery);
      const fiveDayData = await FiveDayRes.json();
      let currentConditionsUrl =
        "http://dataservice.accuweather.com/currentconditions/v1/";
      const currentConditionRes = await fetch(
        currentConditionsUrl + fiveDayQuery
      );
      const currentConditionsData = await currentConditionRes.json();
      return { fiveDayData, city, cityKey, currentConditionsData };
    } catch (err) {
      console.log(err);
      return rejectWithValue();
    }
  }
);

export const fecthCity = createAsyncThunk(
  "city/fecthCity",
  async (city, { rejectWithValue }) => {
    let baseUrl =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
    let query = `?apikey=${apiKey}&q=${city}`;
    try {
      const res = await fetch(baseUrl + query);
      const data = await res.json();
      let cityKey = data[0].Key;
      let fiveDayUrl =
        "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
      let fiveDayQuery = `${cityKey}?apikey=${apiKey}`;
      const FiveDayRes = await fetch(fiveDayUrl + fiveDayQuery);
      const fiveDayData = await FiveDayRes.json();
      let currentConditionsUrl =
        "http://dataservice.accuweather.com/currentconditions/v1/";
      const currentConditionRes = await fetch(
        currentConditionsUrl + fiveDayQuery
      );
      const currentConditionsData = await currentConditionRes.json();
      return { fiveDayData, city, cityKey, currentConditionsData };
    } catch (err) {
      console.log(err);
      return rejectWithValue();
    }
  }
);

export const currentCitySlicer = createSlice({
  name: "city",
  initialState,
  extraReducers: {
    [fecthCity.pending]: (state) => {
      state["isLoading"] = true;
    },
    [fecthCity.fulfilled]: (state, { payload: data }) => {
      state["currentCity"].name = data.city;
      state["currentCity"].key = data.cityKey;
      state["currentCity"].text = data.fiveDayData.Headline.Text;
      state["fiveDayForcast"] = data.fiveDayData.DailyForecasts;
      state["currentCondition"] = data.currentConditionsData;
      state["isLoading"] = false;
      state["error"] = false;
    },
    [fecthCity.rejected]: (state, { payload: data }) => {
      state["error"] = true;
      state["isLoading"] = false;
    },
    [getUserLocation.pending]: (state) => {
      state["isLoading"] = true;
    },
    [getUserLocation.fulfilled]: (state, { payload: data }) => {
      state["currentCity"].name = data.city;
      state["currentCity"].key = data.cityKey;
      state["currentCity"].text = data.fiveDayData.Headline.Text;
      state["fiveDayForcast"] = data.fiveDayData.DailyForecasts;
      state["currentCondition"] = data.currentConditionsData;
      state["isLoading"] = false;
      state["error"] = false;
    },
    [getUserLocation.rejected]: (state) => {
      state["error"] = true;
      state["isLoading"] = false;
    },
  },
});

export const {} = currentCitySlicer.actions;
export default currentCitySlicer.reducer;
