import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messageBox: {
        title: '',
        content: '',
        contentCancel: '',
        contentOK: '',
        result: null,
        type: '',
        isShow: false
    },
    previousLink: '',
}

const slice = createSlice({
    name: 'globalApp',
    initialState,
    reducers: {
        setMessageBox: (state,action) => {
            state.messageBox = {
                ...state.messageBox,
                ...action.payload
            };
        },
        setPreviousLink: (state,action) => {
            state.previousLink = action.payload;
        },
    },
})

export default slice.reducer;
export const {setMessageBox, setPreviousLink} = slice.actions