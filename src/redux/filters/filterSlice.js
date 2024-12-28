import { createSlice } from "@reduxjs/toolkit";
import { FILTERS } from "./consts";

export const filterSlice = createSlice({
    name: "filter",
    initialState: FILTERS.ALL,
    reducers: {
        changeStatusFilter(state, action) {
            return action.payload;
        },
    },
});

console.log(filterSlice);

export const { changeStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;