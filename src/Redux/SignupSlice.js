import { createSlice } from "@reduxjs/toolkit";
import { setData } from "../utils/HelperFunction";
const SignupSlice = createSlice({
  name: "Signup",
  initialState: {
    arr: [],
  },
  reducers: {
    onButtonClick(state, action) {
      state.arr = [...state.arr, action.payload];
      setData("myKey", action.payload);
    },
  },
});

export const { onButtonClick } = SignupSlice.actions;

export default SignupSlice.reducer;
