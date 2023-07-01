import { initialState } from './initialState';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, logOut, register } from './operations';
import { toast } from 'react-hot-toast';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
        toast.success('Registration successfull!');
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = payload;
        toast.error(`Something went wrong. Error message: ${state.error}`);
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
        toast.success('Login successfull!');
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.error = payload;
        toast.error(`Something went wrong. Error message: ${state.error}`);
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
        toast.success('Logout successfull!');
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.error = payload;
        toast.error(`Something went wrong. Error message: ${state.error}`);
      })
      .addCase(fetchCurrentUser.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
