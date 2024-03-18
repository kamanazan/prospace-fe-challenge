import {createSlice} from '@reduxjs/toolkit';

const officeSlice = createSlice({
  name: 'office',
  initialState: {
    officeList: []
  },
  reducers: {
    addOffice: (state, action) => {
      state.officeList = [ ...state.officeList, action.payload];
    },
    deleteOffice: (state, action) => {
      const idxToDelete = state.officeList.findIndex(o => o._id === action.payload)
      if (idxToDelete !== -1) {
        state.officeList = state.officeList.toSpliced(idxToDelete, 1)
      }
    }
  },
});

export const { addOffice, deleteOffice} = officeSlice.actions;

export default officeSlice.reducer;
