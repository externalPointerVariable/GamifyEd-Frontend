import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  joinedClassrooms: [],
  createdClassrooms: [],
  currentClassroom: null,
  loading: false,
  error: null,
};

const classroomsSlice = createSlice({
  name: "classrooms",
  initialState,
  reducers: {
    setJoinedClassrooms: (state, action) => {
      state.joinedClassrooms = action.payload;
    },
    setCreatedClassrooms: (state, action) => {
      state.createdClassrooms = action.payload;
    },
    setCurrentClassroom: (state, action) => {
      state.currentClassroom = action.payload;
    },
    setClassroomLoading: (state, action) => {
      state.loading = action.payload;
    },
    setClassroomError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setJoinedClassrooms,
  setCreatedClassrooms,
  setCurrentClassroom,
  setClassroomLoading,
  setClassroomError,
} = classroomsSlice.actions;

export default classroomsSlice.reducer;
