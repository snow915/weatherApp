import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    responseCities: [],
    responseWeather: [],
    currentCity: {}
};

const generalInfoSlice = createSlice({
    name: "generalInfoSlice",
    initialState,
    reducers: {
        saveCities: (state, action) => {
            state.responseCities = action.payload;
        },
        saveWeather: (state, action) => {
            state.responseWeather = action.payload;
        },
        saveCurrentCity: (state, action) => {
            state.currentCity = action.payload;
        },
    },
});

export const { saveCities, saveWeather, saveCurrentCity } = generalInfoSlice.actions;
export default generalInfoSlice.reducer;
