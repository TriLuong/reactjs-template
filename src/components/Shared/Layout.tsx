import Dashboard from "@/pages/authenticated/Dashboard";
import Menu from "./Menu";
import { Link, Route, Routes } from "react-router-dom";

const Layout = (props: any) => {
  return (
    <div id="main_content">
      <Menu {...props} />
    </div>
  );
};

export default Layout;
