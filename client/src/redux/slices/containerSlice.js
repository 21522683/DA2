import { createSlice } from '@reduxjs/toolkit';


const containerSlice = createSlice({
  name: 'containers',
  initialState: {

    containersList: [],
    indexSelected: -1,
    isOpenModalAdd: false,
    isOpenModalUpdate: false,
    isOpenMessagebox: false,
    isLoading: false,

  },
  reducers: {
    setListContainer: (state, action) => {
      state.containersList = [...action.payload];
    },
    setIsOpenModalAdd: (state, action) => {
      state.isOpenModalAdd = action.payload;
    },
    setIsOpenModalUpdate: (state, action) => {
        state.isOpenModalUpdate = action.payload;
      },
    setIsOpenMessageBox: (state, action) => {
      state.isOpenMessagebox = action.payload;
    },
    setIndexContainerSelected: (state, action) => {
      state.indexSelected = action.payload;
    }
  },
});

export const { setListContainer, setIsOpenModalAdd, setIsOpenModalUpdate, setIsOpenMessageBox, setIndexContainerSelected } = containerSlice.actions;
export default containerSlice.reducer;

