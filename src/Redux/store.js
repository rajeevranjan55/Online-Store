import { configureStore } from "@reduxjs/toolkit";


import SignupSlice from "./SignupSlice";

export const store = configureStore({
    reducer:{
        signup:SignupSlice
    }
});