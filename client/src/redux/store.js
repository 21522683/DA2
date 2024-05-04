import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../redux/sliceAdmin/userSlice';
import orderSlice from './sliceAdmin/orderSlice';
import containerSlice from './sliceAdmin/containerSlice';
import vesselSlice from './sliceAdmin/vesselSlice';
import goodsDeclarationSlice from './sliceAdmin/goodsDeclarationSlice';

const store = configureStore({
  reducer: {
    userManagement: userSlice,
    orderManagement: orderSlice,
    containerManagement: containerSlice,
    vesselManagement: vesselSlice,
    goodsDeclarationManagement: goodsDeclarationSlice,
  },
});

export default store;