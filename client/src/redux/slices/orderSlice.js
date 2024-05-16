import { createSlice } from '@reduxjs/toolkit';


const orderSlice = createSlice({
  name: 'orders',
  initialState: {

    ordersList: [],
    indexSelected: -1,
    isOpenModalDetail: false,
    isOpenMessagebox: false,
    isLoading: false,
    listCreateGoods: [],
    indexGoodsSelected: -1,

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
    },
    setListCreateGoods: (state, action) => {
      state.listCreateGoods = [...action.payload];
    },
    setIndexGoodsSelected: (state, action) => {
      state.indexGoodsSelected = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    addGoods: (state, action) => {
      state.listCreateGoods.push(action.payload);
    },
    updateGoods: (state, action) => {
      const { index, newGood } = action.payload;
      if (index >= 0 && index < state.listCreateGoods.length) {
        state.listCreateGoods[index] = newGood;
      }
    },
    deleteGoods: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.listCreateGoods.length) {
        state.listCreateGoods = [...state.listCreateGoods.slice(0, index), ...state.listCreateGoods.slice(index + 1)];        
      }
    },
  },
});

export const {
  setListOrder,
  setIsOpenModalDetail,
  setIsOpenMessageBox,
  setIndexOrderSelected,
  setListCreateGoods,
  setIndexGoodsSelected,
  addGoods,
  updateGoods,
  deleteGoods,
  setLoading,
} = orderSlice.actions;

export default orderSlice.reducer;

