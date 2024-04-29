import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../redux/sliceAdmin/userSlice';
import orderSlice from './sliceAdmin/orderSlice';

const store = configureStore({
  reducer: {
    userManagement: userSlice,
    orderManagement: orderSlice,
  },
});

export default store;