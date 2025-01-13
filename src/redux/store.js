import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filters/filterSlice";
import { taskReducer } from "./tasks/taskSlice";


export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        filter: filterReducer,
    },
});