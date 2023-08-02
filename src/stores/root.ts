import { combineReducers } from "@reduxjs/toolkit";
import { appReducer } from "./app";
import { profileReducer } from "./profile";

export const rootReducer = combineReducers({
  app: appReducer,
  profile: profileReducer,
});
