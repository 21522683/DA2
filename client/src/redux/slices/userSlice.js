import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from '../../utils/index';
import axios from 'axios';

const fetchDataGetCurrentUser = createAsyncThunk('fetchDataGetCurrentUser', async () => {
  const response = await axios.get(`${baseUrl}/user/getInfoCurrentUser`);
  return response.data;
})

const userSlice = createSlice({
  name: 'users',
  initialState: {

    usersList: [],
    currentUser: {},
    infoAdmin: {},
    indexSelected: -1,
    isOpenModalReview: false,
    isOpenModalChangeStatus: false,
    isOpenMessageBoxNotify: false,
    isOpenMessagebox: false,
    isOpenModalNotVerify: false,
    isOpenModalUpdateInfo: false,
    isOpenModalSendRequireVerify: false,
    isLoading: false,
    error: '',

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
    setIsOpenModalNotVerify: (state, action) => {
      state.isOpenModalNotVerify = action.payload;
    },
    setIsOpenModalUpdateInfo: (state, action) => {
      state.isOpenModalUpdateInfo = action.payload;
    },
    setIsOpenModalSendRequireVerify: (state, action) => {
      state.isOpenModalSendRequireVerify = action.payload;
    },
    setIsOpenMessageBoxNotify: (state, action) => {
      state.isOpenMessageBoxNotify = action.payload;
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
    setInfoAdmin: (state, action) => {
      state.infoAdmin = {
        ...action.payload
      };
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    // getCurentUser 
    builder.addCase(fetchDataGetCurrentUser.pending, (state, action) => {

    });
    builder.addCase(fetchDataGetCurrentUser.fulfilled, (state, action) => {
      state.currentUser = { ...action.payload };
    });
    builder.addCase(fetchDataGetCurrentUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
  }
});

export const {
  setListUser,
  setIsOpenModalReview,
  setIsOpenModalChangeStatus,
  setIsOpenModalNotVerify,
  setIsOpenMessageBoxNotify,
  setIsOpenMessageBox,
  setIndexUserSelected,
  setCurrentUser,
  setLoading,
  setIsOpenModalUpdateInfo,
  setIsOpenModalSendRequireVerify,
  setError,
  setInfoAdmin
} = userSlice.actions;
export default userSlice.reducer;
export {
  fetchDataGetCurrentUser,
}

