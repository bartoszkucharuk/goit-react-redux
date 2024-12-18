import { CHANGE_FILTER } from "./actions";
import { FILTERS } from "./consts";

export const filterReducer = (state = FILTERS.ALL, action) => {
    switch (action.type) {
        case CHANGE_FILTER:
            return action.payload;    
    default:
      return state;
  }
};