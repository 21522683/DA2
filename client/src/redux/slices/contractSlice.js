import { createSlice } from '@reduxjs/toolkit';

const contractSlice = createSlice({
  name: 'contracts',
  initialState: {

    contractsList: [],
    indexSelected: -1,
    isOpenModalDetail: false,
    isLoading: false,

    contractOfUserList: [],
    indexSelectedContractOfUser: -1,
    isOpenModalDetailContractOfUser: false,
  },
  reducers: {
    setListContracts: (state, action) => {
      state.contractsList = [...action.payload];
    },
    setListContractsOfUser: (state, action) => {
      state.contractOfUserList = [...action.payload];
    },
    setIsOpenModalDetail: (state, action) => {
      state.isOpenModalDetail = action.payload;
    },
    setIsOpenModalDetailContractOfUser: (state, action) => {
      state.isOpenModalDetailContractOfUser = action.payload;
    },
    setIndexContractSelected: (state, action) => {
      state.indexSelected = action.payload;
    },
    setIndexContractOfUserSelected: (state, action) => {
      state.indexSelectedContractOfUser = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setListContracts,
  setIsOpenModalDetail,
  setIndexContractSelected,
  setLoading,
  setListContractsOfUser,
  setIndexContractOfUserSelected,
  setIsOpenModalDetailContractOfUser,

} = contractSlice.actions;

export default contractSlice.reducer;



