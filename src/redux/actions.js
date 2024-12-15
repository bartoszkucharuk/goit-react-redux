import { v4 as uuidv4 } from "uuid";

// const action = {
//     type: "DODAJ",
//     payload: {
//         name: "Bob",
//     },
// }
export const SAVE_TASK = "SAVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const saveTask = (text) => ({ // round bracket due to export this const
    type: SAVE_TASK,
    payload: {
        id: uuidv4(),
        completed: false,
        text,
    }
})

export const removeTask = (text) => ({ // round bracket due to export this const
    type: REMOVE_TASK,
    payload: {
        id: uuidv4(),
        completed: false,
        text,
    }
})