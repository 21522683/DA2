import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    previousLink: '',
}

const slice = createSlice({
    name: 'globalApp',
    initialState,
    reducers: {
        setPreviousLink: (state,action) => {
            state.previousLink = action.payload;
        },
    },
})

export default slice.reducer;
export const {setPreviousLink} = slice.actions