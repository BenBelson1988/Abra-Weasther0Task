import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cityList: [],
};

export const favoritesSlicer = createSlice({
  name: "cityList",
  initialState,
  reducers: {
    addCityToFavorits(state, action) {
      return { ...state, cityList: [action.payload, ...state.cityList] };
    },
    removeCityFromFavorites(state, action) {
      return {
        ...state,
        cityList: state.cityList.filter(
          (city) => city.currentCity.key !== action.payload
        ),
      };
    },
  },
});

export const { addCityToFavorits, removeCityFromFavorites } =
  favoritesSlicer.actions;
export default favoritesSlicer.reducer;
