import { configureStore } from "@reduxjs/toolkit";


import SignupSlice from "./SignupSlice";
import LanguageSlice from "./LanguageSlice";

export const store = configureStore({
    reducer:{
        signup:SignupSlice,
        lang:LanguageSlice
    }
});