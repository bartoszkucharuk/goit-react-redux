import { v4 as uuidv4 } from "uuid";

// const action = {
//     type: "DODAJ",
//     payload: {
//         name: "Bob",
//     },
// }
export const SAVE_TASK = "SAVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";

export const saveTask = (text) => ({ // round bracket due to export this const
    type: SAVE_TASK,
    payload: {
        id: uuidv4(),
        completed: false,
        text,
    }
});

export const removeTask = (id) => ({ // round bracket due to export this const
    type: REMOVE_TASK,
    payload: id,
});
export const toggleTaskStatus = (id) => ({ // round bracket due to export this const
    type: TOGGLE_TASK,
    payload: id,
});