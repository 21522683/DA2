import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../redux/sliceAdmin/userSlice';
import orderSlice from './sliceAdmin/orderSlice';
import containerSlice from './sliceAdmin/containerSlice';

const store = configureStore({
  reducer: {
    userManagement: userSlice,
    orderManagement: orderSlice,
    containerManagement: containerSlice,
  },
});

export default store;