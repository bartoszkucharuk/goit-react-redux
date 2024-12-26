// export const CHANGE_FILTER = "CHANGE_FILTER";

// export const changeFilter = filter => ({
//     type: CHANGE_FILTER,
//     payload: filter,
// });

import { createAction } from "@reduxjs/toolkit";

export const changeFilter = createAction("CHANGE_FILTER");