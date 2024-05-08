import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'users',
  initialState: {

    usersList: [],
    currentUser: {},
    indexSelected: -1,
    isOpenModalReview: false,
    isOpenModalChangeStatus: false,
    isOpenMessagebox: false,
    isLoading: false,

  },
  reducers: {
    setListUser: (state, action) => {
      state.usersList = [...action.payload];
    },
    setIsOpenModalReview: (state, action) => {
      state.isOpenModalReview = action.payload;
    },
    setIsOpenModalChangeStatus: (state, action) => {
      state.isOpenModalChangeStatus = action.payload;
    },
    setIsOpenMessageBox: (state, action) => {
      state.isOpenMessagebox = action.payload;
    },
    setIndexUserSelected: (state, action) => {
      state.indexSelected = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = {
        ...action.payload
      };
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  },
});

export const { setListUser, setIsOpenModalReview, setIsOpenModalChangeStatus, setIsOpenMessageBox, setIndexUserSelected, setCurrentUser, setLoading } = userSlice.actions;
export default userSlice.reducer;

