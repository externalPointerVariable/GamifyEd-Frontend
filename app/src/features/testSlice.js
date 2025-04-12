import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  practiceTests: [],
  testQuizzes: [],
  currentTest: null,
  loading: false,
  error: null,
};

const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    setPracticeTests: (state, action) => {
      state.practiceTests = action.payload;
    },
    setTestQuizzes: (state, action) => {
      state.testQuizzes = action.payload;
    },
    setCurrentTest: (state, action) => {
      state.currentTest = action.payload;
    },
    setTestsLoading: (state, action) => {
      state.loading = action.payload;
    },
    setTestsError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setPracticeTests,
  setTestQuizzes,
  setCurrentTest,
  setTestsLoading,
  setTestsError,
} = testsSlice.actions;

export default testsSlice.reducer;
