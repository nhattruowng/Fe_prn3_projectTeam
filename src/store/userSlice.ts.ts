import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {User} from "../modole/entity/User.ts";

const storedUser = localStorage.getItem("user");

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: storedUser ? JSON.parse(storedUser) : null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        clearUser(state) {
            state.user = null;
            localStorage.removeItem("user");
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;