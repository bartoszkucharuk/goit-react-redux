import { createStore } from "redux"
import { taskReducer } from "./taskReducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

const enhancer = devToolsEnhancer();
export const store = createStore(taskReducer, enhancer);