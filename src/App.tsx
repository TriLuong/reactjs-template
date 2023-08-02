import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/authentication/Login";
import Signup from "@/pages/authentication/Signup";

const App = (props: any) => {
  const {
    darkMode,
    boxLayout,
    darkSidebar,
    iconColor,
    gradientColor,
    rtl,
    fontType,
  } = props;

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
          <Route path="/signup" Component={Signup} />
          <Route path="/login" Component={Login} />
          {/* <Route path="/forgotpassword" Component={ForgotPassword} />
          <Route path="/notfound" Component={NotFound} />
          <Route path="/internalserver" Component={InternalServer} />
          <Route Component={Layout} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
