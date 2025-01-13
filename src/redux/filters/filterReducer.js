import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./actions";
import { FILTERS } from "./consts";

export const filterReducer = createReducer(FILTERS.ALL, (builder) => {
  builder.addCase(changeFilter, (state, action) => action.payload);
});