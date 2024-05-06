import { createSlice } from '@reduxjs/toolkit';


const goodsDeclarationSlice = createSlice({
  name: 'goodsDeclarations',
  initialState: {

    goodsDeclarationsList: [],
    indexSelected: -1,
    isOpenModalDetail: false,
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
    }
  },
});

export const { setListGoodsDeclaration, setIsOpenModalDetail, setIndexGoodDeclarationSelected } = goodsDeclarationSlice.actions;
export default goodsDeclarationSlice.reducer;

