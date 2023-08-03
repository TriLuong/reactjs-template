import { combineReducers } from "@reduxjs/toolkit";
import { appReducer } from "./app";
import { profileReducer } from "./profile";
import { settingsReducer } from "./settings";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  profile: profileReducer,
  settings: settingsReducer,
});
