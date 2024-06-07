import { createSlice } from '@reduxjs/toolkit';


const goodsDeclarationSlice = createSlice({
  name: 'goodsDeclarations',
  initialState: {

    goodsDeclarationsList: [],
    indexSelected: -1,
    isOpenModalDetail: false,
    isOpenModalCreateBill: false,
    isOpenMessagebox: false,
    isLoading: false,

  },
  reducers: {
    setListGoodsDeclaration: (state, action) => {
      state.goodsDeclarationsList = [...action.payload];
    },
    setIsOpenModalDetail: (state, action) => {
      state.isOpenModalDetail = action.payload;
    },
    setIndexGoodDeclarationSelected: (state, action) => {
      state.indexSelected = action.payload;
    },
    setIsOpenModalCreateBill: (state, action) => {
      state.isOpenModalCreateBill = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsOpenMessageBox: (state, action) => {
      state.isOpenMessagebox = action.payload;
    },
  },
});

export const { 
  setListGoodsDeclaration, 
  setIsOpenModalDetail, 
  setIndexGoodDeclarationSelected, 
  setIsOpenModalCreateBill, 
  setLoading, 
  setIsOpenMessageBox
} = goodsDeclarationSlice.actions;
export default goodsDeclarationSlice.reducer;

