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

export interface ISettingState {
  loading: { [x: string]: boolean };
}

export interface ISettingState {
  isDarkMode: boolean;
  isDarkHeader: boolean;
  isFixNavbar: boolean;
  isMinSidebar: boolean;
  isDarkSidebar: boolean;
  isIconColor: boolean;
  isGradientColor: boolean;
  isRtl: boolean;
  isFont: string;
  isSubMenuIcon: string;
  isMenuIcon: string;
  isBoxLayout: boolean;
  isStatistics: boolean;
  isFriendList: boolean;
  isbox: boolean;
  isbox2: boolean;
  isbox3: boolean;
  isbox4: boolean;
  isbox5: boolean;
  isbox6: boolean;
  isbox7: boolean;
  isbox8: boolean;
  isbox9: boolean;
  isbox10: boolean;
  isBoxClose: boolean;
  isBox2Close: boolean;
  isBox3Close: boolean;
  isBox4Close: boolean;
  isBox5Close: boolean;
  isBox6Close: boolean;
  isBox7Close: boolean;
  isBox8Close: boolean;
  isBox9Close: boolean;
  isBox10Close: boolean;
  isStatisticsClose: boolean;
  isFriendListClose: boolean;
  isToggleLeftMenu: boolean;

  loading: { [x: string]: boolean };
}

export const initialState: ISettingState = {
  isDarkMode: false,
  isDarkHeader: false,
  isFixNavbar: false,
  isMinSidebar: false,
  isDarkSidebar: false,
  isIconColor: false,
  isGradientColor: false,
  isRtl: false,
  isFont: "font-montserrat",
  isSubMenuIcon: "list-a",
  isMenuIcon: "list-c",
  isBoxLayout: false,
  isStatistics: true,
  isFriendList: true,
  isbox: true,
  isbox2: true,
  isbox3: true,
  isbox4: true,
  isbox5: true,
  isbox6: true,
  isbox7: true,
  isbox8: true,
  isbox9: true,
  isbox10: true,
  isBoxClose: true,
  isBox2Close: true,
  isBox3Close: true,
  isBox4Close: true,
  isBox5Close: true,
  isBox6Close: true,
  isBox7Close: true,
  isBox8Close: true,
  isBox9Close: true,
  isBox10Close: true,
  isStatisticsClose: true,
  isFriendListClose: true,
  isToggleLeftMenu: false,

  loading: {},
};

const settingsSlice = createSlice({
  name: SLICE_NAME.SETTINGS,
  initialState: initialState,
  reducers: {
    darkModeAction: (state, { payload }) => {
      state.isDarkMode = payload;
    },

    darkHeaderAction: (state, { payload }) => {
      state.isDarkHeader = payload;
    },

    fixNavbarAction: (state, { payload }) => {
      state.isFixNavbar = payload;
    },

    darkMinSidebarAction: (state, { payload }) => {
      state.isMinSidebar = payload;
    },

    darkSidebarAction: (state, { payload }) => {
      state.isDarkSidebar = payload;
    },

    iconColorAction: (state, { payload }) => {
      state.isIconColor = payload;
    },

    gradientColorAction: (state, { payload }) => {
      state.isGradientColor = payload;
    },

    rtlAction: (state, { payload }) => {
      state.isRtl = payload;
    },

    fontAction: (state, { payload }) => {
      state.isFont = payload;
    },

    subMenuIconAction: (state, { payload }) => {
      state.isSubMenuIcon = payload;
    },

    menuIconAction: (state, { payload }) => {
      state.isMenuIcon = payload;
    },

    boxLayoutAction: (state, { payload }) => {
      state.isBoxLayout = payload;
    },

    statisticsAction: (state, { payload }) => {
      state.isStatistics = payload;
    },

    friendListAction: (state, { payload }) => {
      state.isFriendList = payload;
    },

    statisticsCloseAction: (state, { payload }) => {
      state.isStatisticsClose = payload;
    },

    accountCloseAction: (state, { payload }) => {
      state.isStatisticsClose = payload;
    },

    friendListCloseAction: (state, { payload }) => {
      state.isFriendListClose = payload;
    },

    toggleLeftMenuAction: (state, { payload }) => {
      state.isToggleLeftMenu = payload;
    },

    boxAction: (state, { payload }) => {
      state.isbox = payload;
    },
    box2Action: (state, { payload }) => {
      state.isbox2 = payload;
    },
    box3Action: (state, { payload }) => {
      state.isbox3 = payload;
    },
    box4Action: (state, { payload }) => {
      state.isbox4 = payload;
    },
    box5Action: (state, { payload }) => {
      state.isbox5 = payload;
    },
    box6Action: (state, { payload }) => {
      state.isbox6 = payload;
    },
    box7Action: (state, { payload }) => {
      state.isbox7 = payload;
    },
    box8Action: (state, { payload }) => {
      state.isbox8 = payload;
    },
    box9Action: (state, { payload }) => {
      state.isbox9 = payload;
    },
    box10Action: (state, { payload }) => {
      state.isbox10 = payload;
    },

    boxCloseAction: (state, { payload }) => {
      state.isBoxClose = payload;
    },
    box2CloseAction: (state, { payload }) => {
      state.isBox2Close = payload;
    },
    box3CloseAction: (state, { payload }) => {
      state.isBox3Close = payload;
    },
    box4CloseAction: (state, { payload }) => {
      state.isBox4Close = payload;
    },
    box5CloseAction: (state, { payload }) => {
      state.isBox5Close = payload;
    },
    box6CloseAction: (state, { payload }) => {
      state.isBox6Close = payload;
    },
    box7CloseAction: (state, { payload }) => {
      state.isBox7Close = payload;
    },
    box8CloseAction: (state, { payload }) => {
      state.isBox8Close = payload;
    },
    box9CloseAction: (state, { payload }) => {
      state.isBox9Close = payload;
    },
    box10CloseAction: (state, { payload }) => {
      state.isBox10Close = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const settingsReducer = settingsSlice.reducer;
export const settingsActions = {
  ...settingsSlice.actions,
};
