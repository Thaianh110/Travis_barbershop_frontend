import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/counterSlice'
import UserReducer from './Slices/UserSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: UserReducer
  },
})