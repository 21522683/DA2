import { createSlice } from '@reduxjs/toolkit';


const vesselSlice = createSlice({
  name: 'vessels',
  initialState: {

    vesselsList: [],
    indexSelected: -1,
    isOpenModalAdd: false,
    isOpenModalUpdate: false,
    isOpenMessagebox: false,
    isLoading: false,

  },
  reducers: {
    setListVessel: (state, action) => {
      state.vesselsList = [...action.payload];
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
    setIndexVesselSelected: (state, action) => {
      state.indexSelected = action.payload;
    }
  },
});

export const { setListVessel, setIsOpenModalAdd, setIsOpenModalUpdate, setIsOpenMessageBox, setIndexVesselSelected} = vesselSlice.actions;
export default vesselSlice.reducer;

