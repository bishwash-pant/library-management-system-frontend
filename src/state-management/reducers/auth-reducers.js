import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'Auth',
    initialState: { isLoggedIn: localStorage.getItem('access-token') ? true : false, user: JSON.parse(localStorage.getItem('user')) || null },
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
        setUser(state, { payload }) {

            state.user = payload;
        },
        resetAll(state) {
            localStorage.clear();
            state.isLoggedIn = false;
            state.user = null;
        }
    },


});
export const { login, logout, setUser, resetAll } = authSlice.actions;
export default authSlice.reducer;