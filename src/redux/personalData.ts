import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "count",
  initialState: {
    name: "",
    lastName: "",
    location: "",
    website: "",
    email: "",
    phoneNumber: "",
    profileDescription: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },

    setLastName: (state, action) => {
      state.lastName = action.payload;
    },

    setLocation: (state, action) => {
      state.location = action.payload;
    },

    setWebsite: (state, action) => {
      state.website = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setProfileDescription: (state, action) => {
      state.profileDescription = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setName,
  setLastName,
  setLocation,
  setWebsite,
  setEmail,
  setPhoneNumber,
  setProfileDescription,
} = counterSlice.actions;

export default counterSlice.reducer;
