import { combineReducers } from "redux";
import { taskReducer } from "./tasks/taskReducer";
import { filterReducer } from "./filters/filterReducer";

export const rootReducer = combineReducers({
    tasks: taskReducer,
    filters: filterReducer,
});