import { createSlice } from '@reduxjs/toolkit';


const orderSlice = createSlice({
  name: 'orders',
  initialState: {

    ordersList: [],
    indexSelected: -1,
    isOpenModalDetail: false,
    isOpenMessagebox: false,
    isLoading: false,

  },
  reducers: {
    setListOrder: (state, action) => {
      state.ordersList = [...action.payload];
    },
    setIsOpenModalDetail: (state, action) => {
      state.isOpenModalDetail = action.payload;
    },
    setIsOpenMessageBox: (state, action) => {
      state.isOpenMessagebox = action.payload;
    },
    setIndexOrderSelected: (state, action) => {
      state.indexSelected = action.payload;
    }
  },
});

export const { setListOrder, setIsOpenModalDetail, setIsOpenMessageBox, setIndexOrderSelected } = orderSlice.actions;
export default orderSlice.reducer;

