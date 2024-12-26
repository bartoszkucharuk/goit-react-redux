import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./actions";
import { FILTERS } from "./consts";

// export const filterReducer = (state = FILTERS.ALL, action) => {
//     switch (action.type) {
//       case changeFilter.type:
//           return action.payload;
//       default:
//         return state;
//   }
// };

export const filterReducer = createReducer(FILTERS.ALL, (builder) => {
  builder.addCase(changeFilter, (state, action) => action.payload);
});