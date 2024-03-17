import { createSlice } from '@reduxjs/toolkit';

const companySlice = createSlice({
  name: 'company',
  initialState: {
    companyList: [
      {
        "id": 1,
        "name": "corteva1",
        "address": "address1",
        "revenue": "9898989",
        "phoneCityCode": "98",
        "phoneNumber": "7987987"
      },
      {
        "id": 2,
        "name": "corteva2",
        "address": "address1",
        "revenue": "9898989",
        "phoneCityCode": "98",
        "phoneNumber": "7987987"
      },
      {
        "id": 3,
        "name": "corteva3",
        "address": "address1",
        "revenue": "9898989",
        "phoneCityCode": "98",
        "phoneNumber": "7987987"
      },
      {
        "id": 4,
        "name": "corteva4",
        "address": "address1",
        "revenue": "9898989",
        "phoneCityCode": "98",
        "phoneNumber": "7987987"
      },
      {
        "id": 5,
        "name": "corteva5",
        "address": "address1",
        "revenue": "9898989",
        "phoneCityCode": "98",
        "phoneNumber": "7987987"
      },
      {
        "id": 6,
        "name": "corteva6",
        "address": "address1",
        "revenue": "9898989",
        "phoneCityCode": "98",
        "phoneNumber": "7987987"
      },
      {
        "id": 7,
        "name": "corteva7",
        "address": "address1",
        "revenue": "9898989",
        "phoneCityCode": "98",
        "phoneNumber": "7987987"
      }
    ]
  },
  reducers: {
    addCompany: (state, action) => {
      state.companyList = [ ...state.companyList, action.payload];
    },
  },
});

export const { addCompany} = companySlice.actions;

export default companySlice.reducer;
