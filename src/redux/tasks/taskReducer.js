import { removeTask, saveTask, toggleTaskStatus } from "./actions";
import { createReducer } from "@reduxjs/toolkit";


const initialState = [ //name "tasks" use in TaskList to map on
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ];


export const taskReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(saveTask, (state, action) => {
      state.push(action.payload); // Immer library
    })
    .addCase(removeTask, (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    })
    .addCase(toggleTaskStatus, (state, action) => {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    });
});