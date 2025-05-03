import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.access;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
    },
    setAuthLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAuthError: (state, action) => {
      state.error = action.payload;
    },
    setAccess: (state, action) => {
      state.token = action.payload.access;
    },
  },
});

export const { setUser, clearUser, setAuthLoading, setAuthError, setAccess } = authSlice.actions;
export default authSlice.reducer;
