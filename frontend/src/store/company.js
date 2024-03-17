import { createSlice } from '@reduxjs/toolkit';

const companySlice = createSlice({
  name: 'company',
  initialState: {
    companyList: []
  },
  reducers: {
    addCompany: (state, action) => {
      state.companyList = [ ...state.companyList, action.payload];
    },
    deleteCompany: (state, action) => {
      const idxToDelete = state.companyList.findIndex(c => c.id === action.payload)
      if (idxToDelete !== -1) {
        const newList = state.companyList.toSpliced(idxToDelete, 1)
        console.log({idxToDelete, newList})
        state.companyList = newList
      }
    }
  },
});

export const { addCompany, deleteCompany} = companySlice.actions;

export default companySlice.reducer;
