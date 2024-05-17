import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from '../../utils/index';
import axios from 'axios';


const fetchDataGetAllOrder = createAsyncThunk('fetchDataGetAllOrder', async () => {
  const response = await axios.get(`${baseUrl}/order/getAllOrders`);
  return response;
})

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
    listOrdersUser: [],
    indexSelectedOrderUser: -1,

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
    setListOrdersUser: (state, action) => {
      state.listOrdersUser = [...action.payload];
    },
    setIndexSelectedOrderUser: (state, action) => {
      state.indexSelectedOrderUser = action.payload;
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
  extraReducers: (builder) => {
    // getCurentUser 
    builder.addCase(fetchDataGetAllOrder.pending, (state, action) => {

    });
    builder.addCase(fetchDataGetAllOrder.fulfilled, (state, action) => {
      state.ordersList = [...action.payload];
    });
    builder.addCase(fetchDataGetAllOrder.rejected, (state, action) => {
      state.error = action.error.message;
    });
  }
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
  setListOrdersUser,
  setIndexSelectedOrderUser
} = orderSlice.actions;

export default orderSlice.reducer;
export {
  fetchDataGetAllOrder,
}


