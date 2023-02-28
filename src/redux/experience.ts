import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface ExperienceState {
  form: ExperienceFormData[];
}

interface ExperienceFormData {
  companyName: string;
  position: string;
  responsibilities: string;
  startDate: string;
  endDate: string;
  uuid: any;
}

const initialState: ExperienceState = {
  form: [
    {
      companyName: "",
      position: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
      uuid: uuidv4(),
    },
  ],
};

export const expierienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addForm: (state, action) => {
      state.form.push({
        companyName: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
        uuid: action.payload,
      });
    },

    updateForm: (state, action) => {
      let { id, field, value } = action.payload;
      for (let i = 0; i < state.form.length; i++) {
        if (state.form[i].uuid == id) {
          const updatedFormData = { ...state.form[i], [field]: value };
          const updatedForm = [...state.form];
          updatedForm[i] = updatedFormData;
          state.form = updatedForm;
        }
      }
    },

    deleteForm: (state, action) => {
      state.form = state.form.filter(
        (data, index) => data.uuid != action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addForm, updateForm, deleteForm } = expierienceSlice.actions;

export default expierienceSlice.reducer;
