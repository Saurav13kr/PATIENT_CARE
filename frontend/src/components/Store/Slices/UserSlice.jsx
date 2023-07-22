import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({

    name: "user",
    initialState: {
        userId: "",
        loggedIn: false,
    },
    reducers: {
        userLoggedIn(state, action) {
            state.userId = action.payload;
            state.loggedIn = true;
            console.log("State: ", state);
        }
    },
});

export const { userLoggedIn } = userSlice.actions;
export default userSlice.reducer;