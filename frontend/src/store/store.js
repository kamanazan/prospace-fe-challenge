import { configureStore } from '@reduxjs/toolkit'
import settingReducer from './setting'
import companyReducer from './company'
import officeReducer from './office'

export const store = configureStore({
  reducer: {
    setting: settingReducer,
    company: companyReducer,
    office: officeReducer
  },
})
