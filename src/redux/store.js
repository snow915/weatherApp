import { configureStore } from "@reduxjs/toolkit";
import generalInfoReducer from "./slices/generalInfoSlice";

export const store = configureStore({
    reducer: {
        generalInfo: generalInfoReducer,
    },
});
