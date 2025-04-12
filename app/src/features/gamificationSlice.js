import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  experience: 0,
  level: 1,
  achievements: [],
  missions: [],
};

const gamificationSlice = createSlice({
  name: 'gamification',
  initialState,
  reducers: {
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setAchievements: (state, action) => {
      state.achievements = action.payload;
    },
    setMissions: (state, action) => {
      state.missions = action.payload;
    },
  },
});

export const {
  setExperience,
  setLevel,
  setAchievements,
  setMissions,
} = gamificationSlice.actions;

export default gamificationSlice.reducer;
