import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const saveTask = createAction("SAVE_TASK", (text) => {
    return {
        payload: {
            id: uuidv4(),
            completed: false,
            text,
        },
    };
});
    
export const removeTask = createAction("REMOVE_TASK");
export const toggleTaskStatus = createAction("TOGGLE_TASK");