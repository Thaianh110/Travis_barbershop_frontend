import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  access_token: ''
}

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    updateUser: (state,action) =>{
        const {name,email,access_token} = action.payload
        console.log('action',action)
        state.name = name || email;
        state.email= email;
        state.access_token=access_token
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateUser} = UserSlice.actions

export default UserSlice.reducer