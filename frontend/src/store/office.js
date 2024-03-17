import { createSlice } from '@reduxjs/toolkit';

const officeSlice = createSlice({
  name: 'office',
  initialState: {
    officeList: []
  },
  reducers: {
    addOffice: (state, action) => {
      state.officeList = [ ...state.officeList, action.payload];
    },
  },
});

export const { addOffice} = officeSlice.actions;

export default officeSlice.reducer;
