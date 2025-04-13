import { configureStore } from '@reduxjs/toolkit';

import authSlice from '../features/authSlice.js';
import classroomsSlice from '../features/classroomsSlice.js';
import testsSlice from '../features/testSlice.js';
import gamificationSlice from '../features/gamificationSlice.js';
import userSlice from '../features/userSlice.js';
import themeSlice from '../features/themeSlice.js';

const store = configureStore({
  reducer: {
    auth: authSlice,
    classrooms: classroomsSlice,
    tests: testsSlice,
    theme: themeSlice,
    gamification: gamificationSlice,
    user: userSlice,
  },
});

export default store;
