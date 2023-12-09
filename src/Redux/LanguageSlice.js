import { createSlice } from "@reduxjs/toolkit";
import { setData } from "../utils/HelperFunction";

const LanguageSlice = createSlice({
  name: "lang",
  initialState: {
    arr: [],
  },
  reducers: {
    onNextPage(state, action) {
      state.arr[0] = action.payload;

      setData("lang", action.payload);
    },
  },
});

export const { onNextPage } = LanguageSlice.actions;

export default LanguageSlice.reducer;
