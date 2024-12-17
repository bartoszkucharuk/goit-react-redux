import { createStore } from "redux"
import { devToolsEnhancer } from "@redux-devtools/extension";
import { taskReducer } from "./tasks/taskReducer";

const enhancer = devToolsEnhancer();
export const store = createStore(taskReducer, enhancer);