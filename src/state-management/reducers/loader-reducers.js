import { createSlice } from "@reduxjs/toolkit"

const loaderSlice = createSlice({
    name: 'Loader',
    initialState: { isLoading: false },
    reducers: {
        setLoader(state) {
            state.isLoading = true;
        },
        unsetLoader(state) {
            state.isLoading = false;
        },

    },
})
export const { setLoader, unsetLoader } = loaderSlice.actions;
export default loaderSlice.reducer;

