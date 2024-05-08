import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import orderSlice from './slices/orderSlice';
import containerSlice from './slices/containerSlice';
import vesselSlice from './slices/vesselSlice';
import goodsDeclarationSlice from './slices/goodsDeclarationSlice';
import globalAppReducer from './slices/globalApp';

const store = configureStore({
  reducer: {
    userManagement: userSlice,
    orderManagement: orderSlice,
    containerManagement: containerSlice,
    vesselManagement: vesselSlice,
    goodsDeclarationManagement: goodsDeclarationSlice,
    globalApp: globalAppReducer,
  },
});

export default store;