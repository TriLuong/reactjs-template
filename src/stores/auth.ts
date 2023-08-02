import api from "@/common/api";
import { SLICE_NAME } from "@/common/constants/stores";
import {
  IForgotPasswordForm,
  ILoginForm,
  ILoginResponse,
  IRegisterForm,
  IRegisterResponse,
  ISendEmailOTPForm,
  IVerifyEmailOTPForm,
} from "@/types/app";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface IAppState {
  loading: { [x: string]: boolean };
}

export const initialState: IAppState = {
  loading: {},
};

const loginEmail = createAsyncThunk(
  `${SLICE_NAME.AUTH}/loginEmail`,
  async (form: ILoginForm) => {
    const response = await api.loginEmail<ILoginResponse>({
      ...form,
    });
    return response;
  }
);

const verifyEmailOTP = createAsyncThunk(
  `${SLICE_NAME.AUTH}/verifyEmailOTP`,
  async (form: IVerifyEmailOTPForm, { rejectWithValue }) => {
    try {
      const response = await api.verifyEmailOTP<ILoginResponse>({
        ...form,
      });
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const sendEmailOTP = createAsyncThunk(
  `${SLICE_NAME.AUTH}/sendEmailOTP`,
  async (form: ISendEmailOTPForm, { rejectWithValue }) => {
    try {
      return api.sendEmailOTP<ILoginResponse>({
        ...form,
      });
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const registerEmail = createAsyncThunk(
  `${SLICE_NAME.AUTH}/registerEmail`,
  async (form: IRegisterForm, { rejectWithValue }) => {
    try {
      return api.registerEmail<IRegisterResponse>({
        ...form,
      });
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const forgotPassword = createAsyncThunk(
  `${SLICE_NAME.AUTH}/forgotPassword`,
  async (form: IRegisterForm, { rejectWithValue }) => {
    try {
      return api.forgotPassword<IForgotPasswordForm>({
        ...form,
      });
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const authSlice = createSlice({
  name: SLICE_NAME.AUTH,
  initialState: initialState,
  reducers: {
    onLogout: (state) => {
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginEmail.pending, (state, { payload }) => {
      state.loading[loginEmail.typePrefix] = true;
    });
    builder.addCase(loginEmail.rejected, (state, { payload }) => {
      state.loading[loginEmail.typePrefix] = false;
    });
    builder.addCase(loginEmail.fulfilled, (state, { payload }) => {
      state.loading[loginEmail.typePrefix] = false;
    });

    builder.addCase(verifyEmailOTP.pending, (state, { payload }) => {
      state.loading[verifyEmailOTP.typePrefix] = true;
    });
    builder.addCase(verifyEmailOTP.rejected, (state, { payload }) => {
      state.loading[verifyEmailOTP.typePrefix] = false;
    });
    builder.addCase(verifyEmailOTP.fulfilled, (state, { payload }) => {
      state.loading[verifyEmailOTP.typePrefix] = false;
    });

    builder.addCase(sendEmailOTP.pending, (state, { payload }) => {
      state.loading[sendEmailOTP.typePrefix] = true;
    });
    builder.addCase(sendEmailOTP.rejected, (state, { payload }) => {
      state.loading[sendEmailOTP.typePrefix] = false;
    });
    builder.addCase(sendEmailOTP.fulfilled, (state, { payload }) => {
      state.loading[sendEmailOTP.typePrefix] = false;
    });

    builder.addCase(registerEmail.pending, (state, { payload }) => {
      state.loading[registerEmail.typePrefix] = true;
    });
    builder.addCase(registerEmail.rejected, (state, { payload }) => {
      state.loading[registerEmail.typePrefix] = false;
    });
    builder.addCase(registerEmail.fulfilled, (state, { payload }) => {
      state.loading[registerEmail.typePrefix] = false;
    });

    builder.addCase(forgotPassword.pending, (state, { payload }) => {
      state.loading[forgotPassword.typePrefix] = true;
    });
    builder.addCase(forgotPassword.rejected, (state, { payload }) => {
      state.loading[forgotPassword.typePrefix] = false;
    });
    builder.addCase(forgotPassword.fulfilled, (state, { payload }) => {
      state.loading[forgotPassword.typePrefix] = false;
    });
  },
});

export const authReducer = authSlice.reducer;
export const authActions = {
  ...authSlice.actions,
  loginEmail,
  verifyEmailOTP,
  sendEmailOTP,
  registerEmail,
  forgotPassword,
};
