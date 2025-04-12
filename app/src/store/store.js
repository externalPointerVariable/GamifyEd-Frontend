import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/authSlice.js';
import classroomsReducer from '../features/classroomsSlice.js';
import testsReducer from '../features/testsSlice.js';
import gamificationReducer from '../features/gamificationSlice.js';
import userReducer from '../features/userSlice.js';
import uiReducer from '../features/uiSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    classrooms: classroomsReducer,
    tests: testsReducer,
    gamification: gamificationReducer,
    user: userReducer,
    ui: uiReducer,
  },
});

export default store;
