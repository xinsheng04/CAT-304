import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  email: null,
  token: null,
  isLoggedIn: false,
}

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    login(state, action){
      const { username, email, token } = action.payload;
      state.username = username;
      state.email = email;
      state.token = token;
      state.isLoggedIn = true;
    }
  }
})

export const { login } = userInfoSlice.actions;
export default userInfoSlice.reducer;