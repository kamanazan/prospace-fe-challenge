import { createSlice } from '@reduxjs/toolkit';

const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    language: 'en',
    showConfirmation: false
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    toggleModalShow: (state, action) => {
      state.showConfirmation = action.payload
    }
  },
});

export const { setLanguage, toggleModalShow } = settingSlice.actions;

export default settingSlice.reducer;
