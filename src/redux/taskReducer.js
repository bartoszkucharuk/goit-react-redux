const initialState = {
  tasks: [ //name "tasks" use in TaskList to map on
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
};


export const taskReducer = (state = initialState, action) => {

  return state;
};