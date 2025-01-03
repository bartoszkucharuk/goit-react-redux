// import { createStore } from "redux"
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./rootReducer";

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filters/filterSlice";
import { taskReducer } from "./tasks/taskSlice";


export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        filter: filterReducer,
    },
});