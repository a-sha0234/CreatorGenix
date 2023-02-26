import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

interface ExperienceState {
  form: ExperienceFormData[];
}

interface ExperienceFormData {
  companyName: string;
  position: string;
  responsibilities: string;
  startDate: string;
  endDate: string;
}

const initialState: ExperienceState = {
  form: [
    {
      companyName: "",
      position: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    },
  ],
};

export const expierienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addForm: (state) => {
      state.form.push({
        companyName: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      });
    },

    updateForm: (state, action) => {
      const { index, field, value } = action.payload;
      const updatedFormData = {
        ...state.form[index],
        [field]: value,
      };
      const updatedForm = [...state.form];
      updatedForm[index] = updatedFormData;
      state.form = updatedForm;
    },
    deleteForm: (state, action) => {
      // using filter works rather than splice() as indecies of items updates in filter as it creates a new array
      state.form = state.form.filter((_, index) => index !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addForm, updateForm, deleteForm } = expierienceSlice.actions;

export default expierienceSlice.reducer;
