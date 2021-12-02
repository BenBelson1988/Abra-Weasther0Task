import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  degrees: "F",
  theme: "dark",
};

export const commonSlicer = createSlice({
  name: "commonSlicer",
  initialState,
  reducers: {
    changeDegree(state, action) {
      return { ...state, degrees: action.payload };
    },
    changeTheme(state, action) {
      return { ...state, theme: action.payload };
    },
  },
});

export const { changeDegree, changeTheme } = commonSlicer.actions;
export default commonSlicer.reducer;
