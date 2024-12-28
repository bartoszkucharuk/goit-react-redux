import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid"; 

const initialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ];

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        saveTask: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(text) {
                return {
                    payload: {
                    id: uuidv4(),
                    completed: false,
                    text,
                },
            };
            },
        },
        
        removeTask(state, action) {
            return state.filter((task) => task.id !== action.payload);
        },
        toggleTask(state, action) {
            for (const task of state) {
                if (task.id === action.payload) {
                    task.completed = !task.completed;
                }
            }
        },
    },
});

export const { saveTask, removeTask, toggleTask } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;