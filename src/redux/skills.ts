import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface SkillState {
  form: SkillFormData[];
}

interface SkillFormData {
  skill: string;
  uuid: string;
}

const initialState: SkillState = {
  form: [],
};

export const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    // addForm: (state, action) => {
    //   state.form.push({
    //     companyName: "",
    //     position: "",
    //     responsibilities: "",
    //     startDate: "",
    //     endDate: "",
    //     uuid: action.payload,
    //   });
    // },
    // updateForm: (state, action) => {
    //   let { id, field, value } = action.payload;
    //   for (let i = 0; i < state.form.length; i++) {
    //     if (state.form[i].uuid == id) {
    //       const updatedFormData = { ...state.form[i], [field]: value };
    //       const updatedForm = [...state.form];
    //       updatedForm[i] = updatedFormData;
    //       state.form = updatedForm;
    //     }
    //   }
    // },
    // deleteForm: (state, action) => {
    //   state.form = state.form.filter(
    //     (data, index) => data.uuid != action.payload
    //   );
    // },

    addSkill: (state, action) => {
      state.form.push({ skill: "", uuid: action.payload });
    },
    updateSkill: (state, action) => {
      let { id, value } = action.payload;
      for (let i = 0; i < state.form.length; i++) {
        if (state.form[i].uuid == id) {
          const updatedFormData = { ...state.form[i], skill: value };
          const updatedForm = [...state.form];
          updatedForm[i] = updatedFormData;
          state.form = updatedForm;
        }
      }
    },
    deleteSkill: (state, action) => {
      state.form = state.form.filter((data) => data.uuid != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSkill, updateSkill, deleteSkill } = skillSlice.actions;

export default skillSlice.reducer;
