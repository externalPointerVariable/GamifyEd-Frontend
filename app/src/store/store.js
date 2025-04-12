import {configureStore} from '@reduxjs/toolkit';
import {setAchievements,
    setExperience,
    setLevel,
    setMissions,
    setAuthError,
    setAuthLoading,
    setClassroomError,
    setClassroomLoading,
    setCreatedClassrooms,
    setCurrentClassroom,
    setJoinedClassrooms,
    setPracticeTests,
    setTestQuizzes,
    setCurrentTest,
    setTestsError,
    setTestsLoading,
    clearUserProfile,
    clearUser,
    setTheme,
    setUserError,
    setUserLoading,
    setUserProfile,
    setUser,} from '../features/index.js'; 

const store = configureStore({
    reducer: {
        // Add your reducers here
    },
});
export default store;