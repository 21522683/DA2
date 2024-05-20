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
  },
  reducers: {
    setListBills: (state, action) => {
      state.billsList = [...action.payload];
    },
    setIsOpenModalDetail: (state, action) => {
      state.isOpenModalDetail = action.payload;
    },
    setIsOpenModalInfo: (state, action) => {
        state.isOpenModalInfo = action.payload;
      },
    setIsOpenMessageBox: (state, action) => {
      state.isOpenMessagebox = action.payload;
    },
    setIndexBillSelected: (state, action) => {
      state.indexSelected = action.payload;
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
    
} = billSlice.actions;

export default billSlice.reducer;



