import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/authentication/Login";
import Signup from "@/pages/authentication/Signup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "./stores";
import { appActions } from "./stores/app";
import { ROUTE_PATH } from "./common/constants/routes";
import Layout from "./components/Shared/Layout";
import Dashboard from "./pages/authenticated/Dashboard";

const App = (props: any) => {
  const {
    isDarkMode: darkMode,
    isDarkSidebar: darkSidebar,
    isIconColor: iconColor,
    isGradientColor: gradientColor,
    isRtl: rtl,
    isFont: fontType,
    isBoxLayout: boxLayout,
  } = useSelector((state) => state.settings);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions?.loadApp());
    dispatch(appActions?.getConstants());
  }, []);

  return (
    <div
      className={`${darkMode ? "dark-mode" : ""}${
        darkSidebar ? "sidebar_dark" : ""
      } ${iconColor ? "iconcolor" : ""} ${gradientColor ? "gradient" : ""} ${
        rtl ? "rtl" : ""
      } ${fontType ? fontType : ""}${boxLayout ? "boxlayout" : ""}`}
    >
      <Router>
        <Routes>
          <Route path={ROUTE_PATH.SIGN_UP} Component={Signup} />
          <Route path={ROUTE_PATH.LOGIN} Component={Login} />
          {/* <Route path="/forgotpassword" Component={ForgotPassword} />
          <Route path="/notfound" Component={NotFound} />
          <Route path="/internalserver" Component={InternalServer} /> */}
          <Route path={ROUTE_PATH.AUTHENTICATED} Component={Layout} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
