import { useSelector, useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "count",
  initialState: {
    university: {
      universityName: "",
      universityCourse: "",
      universityGrade: "",
      yearOfGraduation: "",
    },

    school: {
      schoolName: "",
      schoolCourse: "",
      yearOfGraduation: "",
    },
  },
  reducers: {
    setUniversityName: (state, action) => {
      state.university.universityName = action.payload;
    },

    setUniversityCourse: (state, action) => {
      state.university.universityCourse = action.payload;
    },

    setUniversityGrade: (state, action) => {
      state.university.universityGrade = action.payload;
    },

    setUniversityYearOfGraduation: (state, action) => {
      state.university.yearOfGraduation = action.payload;
    },

    setSchoolName: (state, action) => {
      state.school.schoolName = action.payload;
    },

    setSchoolCourse: (state, action) => {
      state.school.schoolCourse = action.payload;
    },

    setSchoolYearOfGraduation: (state, action) => {
      state.school.yearOfGraduation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUniversityName,
  setUniversityCourse,
  setUniversityGrade,
  setUniversityYearOfGraduation,
  setSchoolName,
  setSchoolCourse,
  setSchoolYearOfGraduation,
} = counterSlice.actions;

export default counterSlice.reducer;
