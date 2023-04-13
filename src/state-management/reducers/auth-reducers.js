import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'Auth',
    initialState: { isLoggedIn: localStorage.getItem('access-token') ? true : false },
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    }
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;