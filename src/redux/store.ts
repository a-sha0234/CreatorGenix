import { useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./personalData";
import education from "../redux/education";

export const store = configureStore({
  reducer: { personalData: counterReducer, educationData: education },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
