import {
  setUser,
  clearUser,
  setAuthLoading,
  setAuthError,
} from "./authSlice.js";
import { setTheme } from "./themeSlice.js";
import {
  setJoinedClassrooms,
  setCreatedClassrooms,
  setCurrentClassroom,
  setClassroomLoading,
  setClassroomError,
} from "./classroomsSlice.js";
import {
  setPracticeTests,
  setTestQuizzes,
  setCurrentTest,
  setTestsLoading,
  setTestsError,
} from "./testSlice.js";
import {
  setUserProfile,
  clearUserProfile,
  setUserLoading,
  setUserError,
} from "./userSlice.js";
import {
  setExperience,
  setLevel,
  setAchievements,
  setMissions,
} from "./gamificationSlice.js";

export {
  setAchievements,
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
  setUser,
};
