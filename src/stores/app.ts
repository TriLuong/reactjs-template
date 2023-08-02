import api from "@/common/api";
import { SLICE_NAME } from "@/common/constants/stores";
import { IConstants } from "@/types/app";
import {
  getToken,
  isTokenValid,
  setRefreshToken,
  setToken,
} from "@/utils/auth";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  token?: string;
  refreshToken?: string;
  constants?: IConstants;
  loading: { [x: string]: boolean };
}

export const initialState: IAppState = {
  isInitialized: false,
  isAuthenticated: false,
  token: undefined,
  refreshToken: undefined,
  constants: undefined,
  loading: {},
};

const loadApp = createAsyncThunk(`${SLICE_NAME.APP}/loadApp`, async () => {
  return { token: getToken() };
});

const getConstants = createAsyncThunk(
  `${SLICE_NAME.APP}/getConstants`,
  async (query) => {
    const data = await api.getConstants<IConstants>(query);
    return data;
  }
);

const appSlice = createSlice({
  name: SLICE_NAME.APP,
  initialState: initialState,
  reducers: {
    onSetInitialized: (state, { payload }: PayloadAction<boolean>) => {
      state.isInitialized = payload;
    },
    onLogout: (state) => {
      localStorage.clear();
      state.token = undefined;
      state.refreshToken = undefined;
      state.isAuthenticated = false;
      setToken(state.token);
    },

    githubLoginSuccess: (state, action) => {
      state.token = action.payload?.token;
      if (action.payload?.refresh_token) {
        state.refreshToken = action.payload?.refresh_token;
        setRefreshToken(state.refreshToken);
      }
      state.isAuthenticated = isTokenValid(state.token);
      setToken(state.token);
    },

    googleLoginSuccess: (state, action) => {
      state.token = action.payload?.token;
      if (action.payload?.refresh_token) {
        state.refreshToken = action.payload?.refresh_token;
        setRefreshToken(state.refreshToken);
      }
      state.isAuthenticated = isTokenValid(state.token);
      setToken(state.token);
    },
    saveToken: (state, action) => {
      state.token = action.payload?.token;
      if (action.payload?.refresh_token) {
        state.refreshToken = action.payload?.refresh_token;
        setRefreshToken(state.refreshToken);
      }
      state.isAuthenticated = isTokenValid(state.token);
      setToken(state.token);
    },
    updateToken: (state, action) => {
      state.token = action.payload?.payload?.data?.token;

      if (action.payload?.payload?.data?.refresh_token) {
        state.refreshToken = action.payload?.payload?.data?.refresh_token;
        setRefreshToken(state.refreshToken);
      }
      state.isAuthenticated = isTokenValid(state.token);
      setToken(state.token);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadApp.pending, (state, { payload }) => {
      state.loading[loadApp.typePrefix] = true;
    });
    builder.addCase(loadApp.rejected, (state, { payload }) => {
      state.loading[loadApp.typePrefix] = false;
    });
    builder.addCase(loadApp.fulfilled, (state, { payload }) => {
      state.loading[loadApp.typePrefix] = false;
      state.isAuthenticated = isTokenValid(payload?.token);
    });

    builder.addCase(getConstants.fulfilled, (state, { payload }) => {
      state.constants = payload?.data;
    });
  },
});

export const appReducer = appSlice.reducer;
export const appActions = {
  ...appSlice.actions,
  loadApp,
  getConstants,
};
