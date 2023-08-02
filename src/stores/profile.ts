import api from "@/common/api";
import { SLICE_NAME } from "@/common/constants/stores";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authActions } from "./auth";
import { IUser } from "@/types/app";

export interface IAppState {
  user?: IUser;
  loading: { [key: string]: boolean };
  userProfile?: IUser;
}

export const initialState: IAppState = {
  user: undefined,
  loading: {},
  userProfile: undefined,
};

const getMe = createAsyncThunk(
  `${SLICE_NAME.PROFILE}/getMe`,
  async (query, { rejectWithValue }) => {
    try {
      const data = await api.getMe<IUser>(query);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const updateMe = createAsyncThunk(
  `${SLICE_NAME.PROFILE}/updateMe`,
  async (form: Partial<IUser>, { rejectWithValue }) => {
    try {
      const data = await api.updateMe<IUser>(form);

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const profileSlice = createSlice({
  name: SLICE_NAME.PROFILE,
  initialState: initialState,
  reducers: {
    onLogout: (state) => {
      state.user = undefined;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      authActions.verifyEmailOTP.fulfilled,
      (state, { payload }) => {
        state.user = payload.data.user;
      }
    );
    builder.addCase(authActions.loginEmail.fulfilled, (state, { payload }) => {
      state.user = payload.data.user;
    });
    builder.addCase(
      authActions.registerEmail.fulfilled,
      (state, { payload }) => {
        state.user = payload.data.user;
      }
    );
    builder.addCase(getMe.fulfilled, (state, { payload }) => {
      state.user = payload.data;
    });

    builder.addCase(updateMe.fulfilled, (state, { payload }) => {
      // console.log(' E >>>>', payload.data);
      state.loading[updateMe.typePrefix] = false;
      state.user = payload.data;
    });
    builder.addCase(updateMe.pending, (state, { payload }) => {
      state.loading[updateMe.typePrefix] = true;
    });
    builder.addCase(updateMe.rejected, (state, { payload }) => {
      state.loading[updateMe.typePrefix] = false;
    });
  },
});

export const profileReducer = profileSlice.reducer;
export const profileCaseReducers = profileSlice.caseReducers;
export const profileActions = {
  ...profileSlice.actions,
  getMe,
  updateMe,
};
