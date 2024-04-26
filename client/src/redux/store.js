import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../redux/sliceAdmin/userSlice';

const store = configureStore({
  reducer: {
    userManagement: userSlice,
  },
});

export default store;