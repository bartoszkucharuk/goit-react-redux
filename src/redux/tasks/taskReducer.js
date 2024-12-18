import { REMOVE_TASK, SAVE_TASK, TOGGLE_TASK } from "./actions";


const initialState = [ //name "tasks" use in TaskList to map on
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ];


export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TASK:
      return [...state.tasks, action.payload];
    case REMOVE_TASK:
      return state.tasks.filter((task) => task.id !== action.payload);
    case TOGGLE_TASK:
      return state.tasks.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    default:
      return state;
  }
};