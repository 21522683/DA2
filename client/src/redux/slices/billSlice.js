import { createSlice } from '@reduxjs/toolkit';


const billSlice = createSlice({
  name: 'bills',
  initialState: {

    billsList: [],
    indexSelected: -1,
    isOpenModalDetail: false,
    isOpenModalInfo: false,
    isOpenMessagebox: false,
    isLoading: false,

    billOfUserList: [],
    indexSelectedBillOfUser: -1,
    isOpenModalDetailBillOfUser: false,
    isOpenModalInfoBillOfUser: false,
  },
  reducers: {
    setListBills: (state, action) => {
      state.billsList = [...action.payload];
    },
    setListBillsOfUser: (state, action) => {
      state.billOfUserList = [...action.payload];
    },
    setIsOpenModalDetail: (state, action) => {
      state.isOpenModalDetail = action.payload;
    },
    setIsOpenModalDetailBillOfUser: (state, action) => {
      state.isOpenModalDetailBillOfUser = action.payload;
    },
    setIsOpenModalInfo: (state, action) => {
      state.isOpenModalInfo = action.payload;
    },
    setIsOpenModalInfoBillOfUser: (state, action) => {
      state.isOpenModalInfoBillOfUser = action.payload;
    },
    setIsOpenMessageBox: (state, action) => {
      state.isOpenMessagebox = action.payload;
    },
    setIndexBillSelected: (state, action) => {
      state.indexSelected = action.payload;
    },
    setIndexBillOfUserSelected: (state, action) => {
      state.indexSelectedBillOfUser = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setListBills,
  setIsOpenModalDetail,
  setIsOpenModalInfo,
  setIsOpenMessageBox,
  setIndexBillSelected,
  setLoading,
  setListBillsOfUser,
  setIndexBillOfUserSelected,
  setIsOpenModalDetailBillOfUser,
  setIsOpenModalInfoBillOfUser

} = billSlice.actions;

export default billSlice.reducer;



