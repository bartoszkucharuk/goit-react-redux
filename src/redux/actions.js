import { v4 as uuidv4 } from "uuid";

// const action = {
//     type: "DODAJ",
//     payload: {
//         name: "Bob",
//     },
// }

export const saveTask = (text) => ({ // round bracket due to export this const
    type: "SAVE_TASK",
    payload: {
        id: uuidv4(),
        completed: false,
        text,
    }
})