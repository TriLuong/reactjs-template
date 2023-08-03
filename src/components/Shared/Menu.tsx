import { useEffect, useState } from "react";
// import MetisMenu from "@metismenu/react";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DefaultLink from "./DefaultLink";

import { ROUTES } from "@/common/constants/routes";
import history from "@/common/history";
import { settingsActions } from "@/stores/settings";
import { useDispatch, useSelector } from "@/stores";

const masterNone = {
  display: "none",
};

const masterBlock = {
  display: "block",
};

const Menu = (props: any) => {
  const { dataFromParent = "" } = props;

  const dispatch = useDispatch();
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);
  const [isOpenRightSidebar, setIsOpenRightSidebar] = useState(false);
  const [isBoxLayout, setIsBoxLayout] = useState(false);
  const [parentlink, setParentlink] = useState(null);
  const [childlink, setChildlink] = useState(null);
  const { location } = history;

  useEffect(() => {
    const links = location.pathname.substring(1).split(/-(.+)/);
    const parentlink = links[0];
    const nochildlink = links[1];

    if (parentlink && nochildlink && nochildlink === "dashboard") {
      handler(parentlink, `${parentlink}${nochildlink}`);
    } else if (parentlink && nochildlink && nochildlink !== "dashboard") {
      handler(parentlink, nochildlink);
    } else if (parentlink) {
      handler(parentlink, "");
    } else {
      handler("hr", "dashboard");
    }
  }, []);

  useEffect(() => {
    const links = location.pathname.substring(1).split(/-(.+)/);
    const parentlink = links[0];
    const nochildlink = links[1];

    if (parentlink && nochildlink && nochildlink === "dashboard") {
      handler(parentlink, `${parentlink}${nochildlink}`);
    } else if (parentlink && nochildlink && nochildlink !== "dashboard") {
      handler(parentlink, nochildlink);
    } else if (parentlink) {
      handler(parentlink, "");
    } else {
      handler("hr", "dashboard");
    }
  }, [location]);

  const handler = (parentlink: any, nochildlink: any) => {
    setParentlink(parentlink);
    setChildlink(nochildlink);
  };

  const handleDarkMode = (e: any) => {
    dispatch(settingsActions.darkModeAction(e.target.checked));
  };
  const handleFixNavbar = (e: any) => {
    dispatch(settingsActions.fixNavbarAction(e.target.checked));
  };
  const handleDarkHeader = (e: any) => {
    dispatch(settingsActions.darkHeaderAction(e.target.checked));
  };
  const handleMinSidebar = (e: any) => {
    dispatch(settingsActions.darkMinSidebarAction(e.target.checked));
  };
  const handleSidebar = (e: any) => {
    dispatch(settingsActions.darkSidebarAction(e.target.checked));
  };
  const handleIconColor = (e: any) => {
    dispatch(settingsActions.iconColorAction(e.target.checked));
  };
  const handleGradientColor = (e: any) => {
    dispatch(settingsActions.gradientColorAction(e.target.checked));
  };
  const handleRtl = (e: any) => {
    dispatch(settingsActions.rtlAction(e.target.checked));
  };
  const handleFont = (e: any) => {
    dispatch(settingsActions.fontAction(e));
  };
  const handleFriendList = (e: any) => {
    dispatch(settingsActions.friendListAction(e));
  };
  const handleStatistics = (e: any) => {
    dispatch(settingsActions.statisticsAction(e));
  };
  const closeFriendList = (e: any) => {
    dispatch(settingsActions.friendListCloseAction(e));
  };
  const closeStatistics = (e: any) => {
    dispatch(settingsActions.statisticsCloseAction(e));
  };
  const handleSubMenuIcon = (e: any) => {
    dispatch(settingsActions.subMenuIconAction(e));
  };
  const handleMenuIcon = (e: any) => {
    dispatch(settingsActions.menuIconAction(e));
  };
  const handleBoxLayout = (e: any) => {
    dispatch(settingsActions.boxLayoutAction(e.target.checked));
  };
  const toggleLeftMenu = (e: any) => {
    console.log(e, "asdasdada");
    dispatch(settingsActions.toggleLeftMenuAction(e));
  };
  const toggleRightSidebar = () => {
    setIsOpenRightSidebar(!isOpenRightSidebar);
  };
  const toggleUserMenu = () => {
    setIsOpenUserMenu(!isOpenUserMenu);
  };
  const toggleSubMenu = (e: any) => {
    let menucClass = "";
    if (e.itemId) {
      const subClass = e.items.map((menuItem: any, i: number) => {
        if (menuItem.to === location.pathname) {
          menucClass = "in";
        } else {
          menucClass = "collapse";
        }
        return menucClass;
      });
      return subClass;
      // return "collapse";
    } else {
      return e.visible ? "collapse" : "metismenu";
    }
  };

  const content = [
    {
      id: "Directories",
      label: "Directories",
    },
    {
      id: 1,
      icon: "icon-rocket",
      label: "HRMS",
      to: "#!",
      content: [
        {
          id: 3,
          label: "Dashboard",
          to: "/",
        },
        {
          id: 4,
          label: "Users",
          to: "/hr-users",
        },
        {
          id: 5,
          label: "Department",
          to: "/hr-department",
        },
        {
          id: 6,
          label: "Employee",
          to: "/hr-employee",
        },
        {
          id: 7,
          label: "Activities",
          to: "/hr-activities",
        },
        {
          id: 8,
          label: "Holidays",
          to: "/hr-holidays",
        },
        {
          id: 9,
          label: "Events",
          to: "/hr-events",
        },
        {
          id: 10,
          label: "Payroll",
          to: "/hr-payroll",
        },
        {
          id: 11,
          label: "Accounts",
          to: "/hr-accounts",
        },
        {
          id: 12,
          label: "Report",
          to: "/hr-report",
        },
      ],
    },
    {
      id: 13,
      icon: "icon-cup",
      label: "Project",
      content: [
        {
          id: 14,
          label: "Dashboard",
          to: "/project-dashboard",
        },
        {
          id: 15,
          label: "Project List",
          to: "/project-list",
        },
        {
          id: 16,
          label: "Taskboard",
          to: "/project-taskboard",
        },
        {
          id: 17,
          label: "Ticket List",
          to: "/project-ticket",
        },
        {
          id: 18,
          label: "Ticket Details",
          to: "/project-ticket-details",
        },
        {
          id: 19,
          label: "Clients",
          to: "/project-clients",
        },
        {
          id: 20,
          label: "Todo List",
          to: "/project-todo",
        },
      ],
    },
    {
      id: 21,
      icon: "icon-briefcase",
      label: "Job Portal",
      content: [
        {
          id: 22,
          label: "Job Dashboard",
          to: "/jobportal-dashboard",
        },
        {
          id: 23,
          label: "Positions",
          to: "/jobportal-positions",
        },
        {
          id: 24,
          label: "Applicant",
          to: "/jobportal-applicants",
        },
        {
          id: 25,
          label: "Resumes",
          to: "/jobportal-resumes",
        },
        {
          id: 26,
          label: "Settings",
          to: "/jobportal-settings",
        },
      ],
    },
    {
      id: 27,
      icon: "icon-lock",
      label: "Authentication",
      content: [
        {
          id: 28,
          label: "Login",
          to: "/login",
        },
        {
          id: 29,
          label: "Register",
          to: "/signup",
        },
        {
          id: 30,
          label: "Forgot Password",
          to: "/forgotpassword",
        },
        {
          id: 31,
          label: "404 error",
          to: "/notfound",
        },
        {
          id: 32,
          label: "500 Error",
          to: "/internalserver",
        },
      ],
    },
    {
      id: "UiElements",
      label: "Ui Elements",
    },
    {
      id: 33,
      icon: "icon-tag",
      label: "Icons",
      to: "/icons",
    },
    {
      id: 34,
      icon: "icon-bar-chart",
      label: "Charts",
      to: "/charts",
    },
    {
      id: 35,
      icon: "icon-layers",
      label: "Forms",
      to: "/forms",
    },
    {
      id: 36,
      icon: "icon-tag",
      label: "Tables",
      to: "/tables",
    },
    {
      id: 37,
      icon: "icon-puzzle",
      label: "Widgets",
      to: "/widgets",
    },
    {
      id: 38,
      icon: "icon-map",
      label: "Maps",
      to: "/maps",
    },
    {
      id: 39,
      icon: "icon-picture",
      label: "Gallery",
      to: "/gallery",
    },
  ];

  const {
    isMinSidebar: darkMinSidebar,
    isStatistics: statisticsOpen,
    isFriendList: friendListOpen,
    isStatisticsClose: statisticsClose,
    isFriendListClose: friendListClose,
    isToggleLeftMenu: istoggleLeftMenu,
  } = useSelector((state) => state.settings);

  const pageHeading = ROUTES.filter(
    (route) => route.path === location.pathname
  );

  return (
    <>
      <div className={`${istoggleLeftMenu ? "offcanvas-active" : ""}`}>
        <div style={parentlink === "login" ? masterNone : masterBlock}>
          <div
            id="header_top"
            className={`header_top ${darkMinSidebar && "dark"}`}
          >
            <div className="container">
              <div className="hleft">
                <NavLink
                  to="/"
                  onClick={() => handler("hr", "dashboard")}
                  className="header-brand"
                >
                  <i className="fe fe-command brand-logo" />
                </NavLink>
                <div className="dropdown">
                  <NavLink to="/page-search" className="nav-link icon">
                    <i className="fa fa-search" />
                  </NavLink>
                  <NavLink
                    to="/app-calendar"
                    className="nav-link icon app_inbox"
                  >
                    <i className="fa fa-calendar" />
                  </NavLink>
                  <NavLink to="/app-contact" className="nav-link icon xs-hide">
                    <i className="fa fa-id-card-o" />
                  </NavLink>
                  <NavLink to="/app-chat" className="nav-link icon xs-hide">
                    <i className="fa fa-comments-o" />
                  </NavLink>
                  <NavLink
                    to="/app-filemanager"
                    className="nav-link icon app_file xs-hide"
                  >
                    <i className="fa fa-folder-o" />
                  </NavLink>
                </div>
              </div>
              <div className="hright">
                <div className="dropdown">
                  {/* <a href="#!" class="nav-link icon theme_btn">
										<i
											class="fa fa-paint-brush"
											data-toggle="tooltip"
											data-placement="right"
											title="Themes"
										></i>
									</a> */}
                  <span
                    className="nav-link icon settingbar"
                    onClick={toggleRightSidebar}
                  >
                    <i
                      className="fa fa-gear fa-spin"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Settings"
                    />
                  </span>
                  <p className="nav-link user_btn" onClick={toggleUserMenu}>
                    <img
                      className="avatar"
                      src="/assets/images/user.png"
                      alt="fake_alr"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="User Menu"
                    />
                  </p>
                  <p
                    className="nav-link icon menu_toggle"
                    onClick={() => toggleLeftMenu(!istoggleLeftMenu)}
                  >
                    <i className="fa  fa-align-left" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="rightsidebar"
            className={`right_sidebar ${isOpenRightSidebar && "open"}`}
          >
            <span
              className="p-3 settingbar float-right"
              onClick={toggleRightSidebar}
            >
              <i className="fa fa-close" />
            </span>
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#Settings"
                  aria-expanded="true"
                >
                  Settings
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#activity"
                  aria-expanded="false"
                >
                  Activity
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane vivify fadeIn active"
                id="Settings"
                aria-expanded="true"
              >
                <div className="mb-4">
                  <h6 className="font-14 font-weight-bold text-muted">
                    Font Style
                  </h6>
                  <div className="custom-controls-stacked font_setting">
                    <label className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="font"
                        defaultChecked
                        defaultValue="font-opensans"
                        onChange={() => handleFont("font-opensans")}
                      />
                      <span className="custom-control-label">
                        Open Sans Font
                      </span>
                    </label>
                    <label className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="font"
                        defaultValue="font-montserrat"
                        onChange={() => handleFont("font-montserrat")}
                      />
                      <span className="custom-control-label">
                        Montserrat Google Font
                      </span>
                    </label>
                    <label className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="font"
                        onChange={() => handleFont("font-roboto")}
                      />
                      <span className="custom-control-label">
                        Robot Google Font
                      </span>
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <h6 className="font-14 font-weight-bold text-muted">
                    Selected Menu Icon
                  </h6>
                  <div className="custom-controls-stacked arrow_option">
                    <label className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="marrow"
                        defaultValue="arrow-a"
                        onChange={() => handleMenuIcon("list-a")}
                      />
                      <span className="custom-control-label">A</span>
                    </label>
                    <label className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="marrow"
                        defaultValue="arrow-b"
                        onChange={() => handleMenuIcon("list-b")}
                      />
                      <span className="custom-control-label">B</span>
                    </label>
                    <label className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="marrow"
                        defaultValue="arrow-c"
                        defaultChecked
                        onChange={() => handleMenuIcon("list-c")}
                      />
                      <span className="custom-control-label">C</span>
                    </label>
                  </div>

                  <h6 className="font-14 font-weight-bold mt-4 text-muted">
                    SubMenu List Icon
                  </h6>
                  <div className="custom-controls-stacked list_option">
                    <label className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="listicon"
                        defaultValue="list-a"
                        defaultChecked
                        onChange={() => handleSubMenuIcon("list-a")}
                      />
                      <span className="custom-control-label">A</span>
                    </label>
                    <label className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="listicon"
                        defaultValue="list-b"
                        onChange={() => handleSubMenuIcon("list-b")}
                      />
                      <span className="custom-control-label">B</span>
                    </label>
                    <label className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="listicon"
                        defaultValue="list-c"
                        onChange={() => handleSubMenuIcon("list-c")}
                      />
                      <span className="custom-control-label">C</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h6 className="font-14 font-weight-bold mt-4 text-muted">
                    General Settings
                  </h6>
                  <ul className="setting-list list-unstyled mt-1 setting_switch">
                    <li>
                      <label className="custom-switch">
                        <span className="custom-switch-description">
                          Night Mode
                        </span>
                        <input
                          type="checkbox"
                          name="custom-switch-checkbox"
                          className="custom-switch-input btn-darkmode"
                          onChange={(e: any) => handleDarkMode(e)}
                        />
                        <span className="custom-switch-indicator" />
                      </label>
                    </li>
                    <li>
                      <label className="custom-switch">
                        <span className="custom-switch-description">
                          Fix Navbar top
                        </span>
                        <input
                          type="checkbox"
                          name="custom-switch-checkbox"
                          className="custom-switch-input btn-fixnavbar"
                          onChange={(e: any) => handleFixNavbar(e)}
                        />
                        <span className="custom-switch-indicator" />
                      </label>
                    </li>
                    <li>
                      <label className="custom-switch">
                        <span className="custom-switch-description">
                          Header Dark
                        </span>
                        <input
                          type="checkbox"
                          name="custom-switch-checkbox"
                          className="custom-switch-input btn-pageheader"
                          onChange={(e: any) => handleDarkHeader(e)}
                        />
                        <span className="custom-switch-indicator" />
                      </label>
                    </li>
                    <li>
                      <label className="custom-switch">
                        <span className="custom-switch-description">
                          Min Sidebar Dark
                        </span>
                        <input
                          type="checkbox"
                          name="custom-switch-checkbox"
                          className="custom-switch-input btn-min_sidebar"
                          onChange={(e: any) => handleMinSidebar(e)}
                        />
                        <span className="custom-switch-indicator" />
                      </label>
                    </li>
                    <li>
                      <label className="custom-switch">
                        <span className="custom-switch-description">
                          Sidebar Dark
                        </span>
                        <input
                          type="checkbox"
                          name="custom-switch-checkbox"
                          className="custom-switch-input btn-sidebar"
                          onChange={(e: any) => handleSidebar(e)}
                        />
                        <span className="custom-switch-indicator" />
                      </label>
                    </li>
                    <li>
                      <label className="custom-switch">
                        <span className="custom-switch-description">
                          Icon Color
                        </span>
                        <input
                          type="checkbox"
                          name="custom-switch-checkbox"
                          className="custom-switch-input btn-iconcolor"
                          onChange={(e: any) => handleIconColor(e)}
                        />
                        <span className="custom-switch-indicator" />
                      </label>
                    </li>
                    <li>
                      <label className="custom-switch">
                        <span className="custom-switch-description">
                          Gradient Color
                        </span>
                        <input
                          type="checkbox"
                          name="custom-switch-checkbox"
                          className="custom-switch-input btn-gradient"
                          onChange={(e: any) => handleGradientColor(e)}
                        />
                        <span className="custom-switch-indicator" />
                      </label>
                    </li>

                    <li>
                      <label className="custom-switch">
                        <span className="custom-switch-description">
                          RTL Support
                        </span>
                        <input
                          type="checkbox"
                          name="custom-switch-checkbox"
                          className="custom-switch-input btn-rtl"
                          onChange={(e: any) => handleRtl(e)}
                        />
                        <span className="custom-switch-indicator" />
                      </label>
                    </li>
                  </ul>
                </div>
                <hr />
                <div className="form-group">
                  <label className="d-block">
                    Storage <span className="float-right">77%</span>
                  </label>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={77}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "77%" }}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-block mt-3"
                  >
                    Upgrade Storage
                  </button>
                </div>
              </div>
              <div
                role="tabpanel"
                className="tab-pane vivify fadeIn"
                id="activity"
                aria-expanded="false"
              >
                <ul className="new_timeline mt-3">
                  <li>
                    <div className="bullet pink" />
                    <div className="time">11:00am</div>
                    <div className="desc">
                      <h3>Attendance</h3>
                      <h4>Computer Class</h4>
                    </div>
                  </li>
                  <li>
                    <div className="bullet pink" />
                    <div className="time">11:30am</div>
                    <div className="desc">
                      <h3>Added an interest</h3>
                      <h4>“Volunteer Activities”</h4>
                    </div>
                  </li>
                  <li>
                    <div className="bullet green" />
                    <div className="time">12:00pm</div>
                    <div className="desc">
                      <h3>Developer Team</h3>
                      <h4>Hangouts</h4>
                      <ul className="list-unstyled team-info margin-0 p-t-5">
                        <li>
                          <img
                            src="/assets/images/xs/avatar1.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="/assets/images/xs/avatar2.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="/assets/images/xs/avatar3.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="/assets/images/xs/avatar4.jpg"
                            alt="Avatar"
                          />
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="bullet green" />
                    <div className="time">2:00pm</div>
                    <div className="desc">
                      <h3>Responded to need</h3>
                      <a href="#!">“In-Kind Opportunity”</a>
                    </div>
                  </li>
                  <li>
                    <div className="bullet orange" />
                    <div className="time">1:30pm</div>
                    <div className="desc">
                      <h3>Lunch Break</h3>
                    </div>
                  </li>
                  <li>
                    <div className="bullet green" />
                    <div className="time">2:38pm</div>
                    <div className="desc">
                      <h3>Finish</h3>
                      <h4>Go to Home</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="theme_div">
            <div className="card">
              <div className="card-body">
                <ul className="list-group list-unstyled">
                  <li className="list-group-item mb-2">
                    <p>Default Theme</p>
                    <a href="../main/index.html">
                      <img
                        src="/assets/images/themes/default.png"
                        className="img-fluid"
                        alt="fake_url"
                      />
                    </a>
                  </li>
                  <li className="list-group-item mb-2">
                    <p>Night Mode Theme</p>
                    <a href="../dark/index.html">
                      <img
                        src="/assets/images/themes/dark.png"
                        className="img-fluid"
                        alt="fake_url"
                      />
                    </a>
                  </li>
                  <li className="list-group-item mb-2">
                    <p>RTL Version</p>
                    <a href="../rtl/index.html">
                      <img
                        src="/assets/images/themes/rtl.png"
                        className="img-fluid"
                        alt="fake_url"
                      />
                    </a>
                  </li>
                  <li className="list-group-item mb-2">
                    <p>Theme Version2</p>
                    <a href="../theme2/index.html">
                      <img
                        src="/assets/images/themes/theme2.png"
                        className="img-fluid"
                        alt="fake_url"
                      />
                    </a>
                  </li>
                  <li className="list-group-item mb-2">
                    <p>Theme Version3</p>
                    <a href="../theme3/index.html">
                      <img
                        src="/assets/images/themes/theme3.png"
                        className="img-fluid"
                        alt="fake_url"
                      />
                    </a>
                  </li>
                  <li className="list-group-item mb-2">
                    <p>Theme Version4</p>
                    <a href="../theme4/index.html">
                      <img
                        src="/assets/images/themes/theme4.png"
                        className="img-fluid"
                        alt="fake_url"
                      />
                    </a>
                  </li>
                  <li className="list-group-item mb-2">
                    <p>Horizontal Version</p>
                    <a href="../horizontal/index.html">
                      <img
                        src="/assets/images/themes/horizontal.png"
                        className="img-fluid"
                        alt="fake_url"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`user_div ${isOpenUserMenu && "open"}`}>
            <h5 className="brand-name mb-4">
              Epic HR
              <p className="user_btn" onClick={toggleUserMenu}>
                <i className="icon-logout" />
              </p>
            </h5>
            <div className="card">
              <div className="card-body">
                <div className="media">
                  <img
                    className="avatar avatar-xl mr-3"
                    src="/assets/images/user.png"
                    alt="avatar"
                  />
                  <div className="media-body">
                    <h5 className="m-0">Sara Hopkins</h5>
                    <p className="text-muted mb-0">Webdeveloper</p>
                    <ul className="social-links list-inline mb-0 mt-2">
                      <li className="list-inline-item">
                        <a
                          href="#!"
                          title="fake_title"
                          data-toggle="tooltip"
                          data-original-title="Facebook"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#!"
                          title="fake_title"
                          data-toggle="tooltip"
                          data-original-title="Twitter"
                        >
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#!"
                          title="fake_title"
                          data-toggle="tooltip"
                          data-original-title={1234567890}
                        >
                          <i className="fa fa-phone" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#!"
                          title="fake_title"
                          data-toggle="tooltip"
                          data-original-title="@skypename"
                        >
                          <i className="fa fa-skype" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {statisticsClose ? (
              <div className={`card ${statisticsOpen ? "card-collapsed" : ""}`}>
                <div className="card-header">
                  <h3 className="card-title">Statistics</h3>
                  <div className="card-options">
                    <span
                      className="card-options-collapse"
                      data-toggle="card-collapse"
                      onClick={() => handleStatistics(!statisticsOpen)}
                    >
                      <i className="fe fe-chevron-up" />
                    </span>
                    <span
                      className="card-options-remove"
                      data-toggle="card-remove"
                      onClick={() => closeStatistics(false)}
                    >
                      <i className="fe fe-x" />
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-6 pb-3">
                        <label className="mb-0">Balance</label>
                        <h4 className="font-30 font-weight-bold">$545</h4>
                      </div>
                      <div className="col-6 pb-3">
                        <label className="mb-0">Growth</label>
                        <h4 className="font-30 font-weight-bold">27%</h4>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="d-block">
                      Total Income<span className="float-right">77%</span>
                    </label>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-blue"
                        role="progressbar"
                        aria-valuenow={77}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "77%" }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="d-block">
                      Total Expenses <span className="float-right">50%</span>
                    </label>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "50%" }}
                      />
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <label className="d-block">
                      Gross Profit <span className="float-right">23%</span>
                    </label>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow={23}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "23%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {friendListClose ? (
              <div className={`card ${friendListOpen ? "card-collapsed" : ""}`}>
                <div className="card-header">
                  <h3 className="card-title">Friends</h3>
                  <div className="card-options">
                    <span
                      className="card-options-collapse"
                      data-toggle="card-collapse"
                      onClick={() => handleFriendList(!friendListOpen)}
                    >
                      <i className="fe fe-chevron-up" />
                    </span>
                    <span
                      className="card-options-remove"
                      data-toggle="card-remove"
                      onClick={() => closeFriendList(false)}
                    >
                      <i className="fe fe-x" />
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="right_chat list-unstyled">
                    <li className="online">
                      <a href="#!">
                        <div className="media">
                          <img
                            className="media-object "
                            src="../assets/images/xs/avatar4.jpg"
                            alt="fake_alr"
                          />
                          <div className="media-body">
                            <span className="name">Donald Gardner</span>
                            <span className="message">Designer, Blogger</span>
                            <span className="badge badge-outline status" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="online">
                      <a href="#!">
                        <div className="media">
                          <img
                            className="media-object "
                            src="/assets/images/xs/avatar5.jpg"
                            alt="fake_alr"
                          />
                          <div className="media-body">
                            <span className="name">Wendy Keen</span>
                            <span className="message">Java Developer</span>
                            <span className="badge badge-outline status" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="offline">
                      <a href="#!">
                        <div className="media">
                          <img
                            className="media-object "
                            src="/assets/images/xs/avatar2.jpg"
                            alt="fake_alr"
                          />
                          <div className="media-body">
                            <span className="name">Matt Rosales</span>
                            <span className="message">CEO, Epic Theme</span>
                            <span className="badge badge-outline status" />
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="card b-none">
              <ul className="list-group">
                <li className="list-group-item d-flex">
                  <div className="box-icon sm rounded bg-blue">
                    <i className="fa fa-credit-card" />{" "}
                  </div>
                  <div className="ml-3">
                    <div>+$29 New sale</div>
                    <a href="#!">Admin Template</a>
                    <div className="text-muted font-12">5 min ago</div>
                  </div>
                </li>
                <li className="list-group-item d-flex">
                  <div className="box-icon sm rounded bg-pink">
                    <i className="fa fa-upload" />{" "}
                  </div>
                  <div className="ml-3">
                    <div>Project Update</div>
                    <a href="#!">New HTML page</a>
                    <div className="text-muted font-12">10 min ago</div>
                  </div>
                </li>
                <li className="list-group-item d-flex">
                  <div className="box-icon sm rounded bg-teal">
                    <i className="fa fa-file-word-o" />{" "}
                  </div>
                  <div className="ml-3">
                    <div>You edited the file</div>
                    <a href="#!">reposrt.doc</a>
                    <div className="text-muted font-12">11 min ago</div>
                  </div>
                </li>
                <li className="list-group-item d-flex">
                  <div className="box-icon sm rounded bg-cyan">
                    <i className="fa fa-user" />{" "}
                  </div>
                  <div className="ml-3">
                    <div>New user</div>
                    <a href="#!">Puffin web - view</a>
                    <div className="text-muted font-12">17 min ago</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div id="left-sidebar" className="sidebar ">
            <h5 className="brand-name">Epic HR</h5>
            <nav id="left-sidebar-nav" className="sidebar-nav">
              {/* <MetisMenu
                className=""
                content={content}
                noBuiltInClassNames={true}
                classNameContainer={(e: any) => toggleSubMenu(e)}
                classNameContainerVisible="in"
                classNameItemActive="active"
                classNameLinkActive="active"
                // classNameItemHasActiveChild="active"
                classNameItemHasVisibleChild="active"
                classNameLink="has-arrow arrow-c"
                // classNameIcon
                // classNameStateIcon

                iconNamePrefix=""
                // iconNameStateHidden=""
                LinkComponent={(e: any) => <DefaultLink itemProps={e} />}
                // toggleSubMenu={toggleSubMenu}
              /> */}
            </nav>
          </div>
        </div>

        <div className="page">
          <Header
            dataFromParent={dataFromParent}
            dataFromSubParent={pageHeading?.[0]?.pageTitle}
          />
          <Routes>
            {ROUTES.map((layout, i) => {
              return (
                <Route
                  key={i}
                  // exact={layout.exact}
                  path={layout.path}
                  Component={layout.component}
                ></Route>
              );
            })}
            {/* <Dashboard action={this.handler} dataFromParent={'dark'} /> */}
            {/* <Route exact path="/hr-users" component={Users}>
					</Route>
					<Route exact path="/hr-department">
						<Departments dataFromParent={'dark'} />
					</Route>
					<Route exact path="/hr-employee">
						<Employee dataFromParent={'dark'} />
					</Route>
					<Route exact path="/hr-events">
						<Events dataFromParent={'dark'} />
					</Route>
					<Route exact path="/hr-holidays">
						<Holidays dataFromParent={'dark'} />
					</Route>
					<Route exact path="/hr-activities">
						<Activities dataFromParent={'dark'} />
					</Route>
					<Route exact path="/hr-payroll">
						<Payroll dataFromParent={'dark'} />
					</Route>
					<Route exact path="/hr-accounts">
						<Accounts dataFromParent={'dark'} />
					</Route>
					<Route exact path="/hr-report">
						<Report dataFromParent={'dark'} />
					</Route>

					<Route exact path="/project-dashboard">
						<ProjectDashboard dataFromParent={'dark'} />
					</Route>
					<Route exact path="/project-list">
						<ProjectList dataFromParent={'dark'} />
					</Route>
					<Route exact path="/project-taskboard">
						<Taskboard dataFromParent={'dark'} />
					</Route>
					<Route exact path="/project-ticket">
						<TicketList dataFromParent={'dark'} />
					</Route>
					<Route exact path="/project-ticket-details">
						<TicketDetails dataFromParent={'dark'} />
					</Route>
					<Route exact path="/project-clients">
						<Clients dataFromParent={'dark'} />
					</Route>
					<Route exact path="/project-todo">
						<TodoList dataFromParent={'dark'} />
					</Route>

					<Route exact path="/jobportal-dashboard">
						<JobPortalDashboard dataFromParent={'dark'} />
					</Route>
					<Route exact path="/jobportal-applicants">
						<Applicants dataFromParent={'dark'} />
					</Route>
					<Route exact path="/jobportal-positions">
						<Positions dataFromParent={'dark'} />
					</Route>
					<Route exact path="/jobportal-resumes">
						<Resumes dataFromParent={'dark'} />
					</Route>
					<Route exact path="/jobportal-settings">
						<Settings dataFromParent={'dark'} />
					</Route>

					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
					<Route path="/forgotpassword" component={ForgotPassword} />
					<Route path="/notfound" component={NotFound} />
					<Route path="/internalserver" component={InternalServer} />

					<Route exact path="/icons">
						<Icons dataFromParent={''} />
					</Route>
					<Route exact path="/icons-feather">
						<IconsFeather dataFromParent={''} />
					</Route>
					<Route exact path="/icons-line">
						<IconsLine dataFromParent={''} />
					</Route>
					<Route exact path="/icons-flag">
						<IconsFlags dataFromParent={''} />
					</Route>
					<Route exact path="/icons-payments">
						<IconsPayments dataFromParent={''} />
					</Route>

					<Route exact path="/charts">
						<Charts dataFromParent={''} />
					</Route>
					<Route exact path="/charts-e">
						<ChartsE dataFromParent={''} />
					</Route>
					<Route exact path="/charts-c3">
						<ChartsC3 dataFromParent={''} />
					</Route>
					<Route exact path="/charts-knob">
						<ChartsKnob dataFromParent={''} />
					</Route>
					<Route exact path="/charts-sparkline">
						<ChartsSparkline dataFromParent={''} />
					</Route>

					<Route exact path="/forms">
						<Forms dataFromParent={''} />
					</Route>
					<Route exact path="/form-advanced">
						<FormAdvanced dataFromParent={''} />
					</Route>
					<Route exact path="/form-validation">
						<FormValidation dataFromParent={''} />
					</Route>
					<Route exact path="/form-wizard">
						<FormWizard dataFromParent={''} />
					</Route>
					<Route exact path="/form-summernote">
						<FormSummernote dataFromParent={''} />
					</Route>

					<Route exact path="/gallery">
						<Gallery dataFromParent={'dark'} />
					</Route>
					<Route exact path="/maps">
						<Maps dataFromParent={'dark'} />
					</Route> */}

            {/* <Route exact path="/tables">
						<Tables dataFromParent={''} />
					</Route>
					<Route exact path="/tables-datatable">
						<DataTables dataFromParent={''} />
					</Route>
					<Route exact path="/tables-color">
						<TablesColor dataFromParent={''} />
					</Route>
					<Route exact path="/tables-basic">
						<TablesBasic dataFromParent={''} />
					</Route>

					<Route exact path="/widgets">
						<Widgets dataFromParent={'dark'} />
					</Route>
					<Route exact path="/w-card">
						<WCard dataFromParent={'dark'} />
					</Route>
					<Route exact path="/w-statistics">
						<WStatistics dataFromParent={'dark'} />
					</Route>
					<Route exact path="/w-data">
						<WData dataFromParent={'dark'} />
					</Route>
					<Route exact path="/w-social">
						<WSocial dataFromParent={'dark'} />
					</Route>
					<Route exact path="/w-other">
						<WOther dataFromParent={'dark'} />
					</Route>

					<Route exact path="/page-search">
						<Search dataFromParent={''} />
					</Route>
					<Route exact path="/profile">
						<Profile dataFromParent={'dark'} />
					</Route>

					<Route exact path="/app-calendar">
						<AppCalender dataFromParent={'dark'} />
					</Route>
					<Route exact path="/app-contact">
						<AppContact dataFromParent={'dark'} />
					</Route>
					<Route exact path="/app-chat">
						<AppChart dataFromParent={'dark'} />
					</Route>
					<Route exact path="/app-filemanager">
						<AppFileManager dataFromParent={'dark'} />
					</Route>
					<Route exact path="/app-setting">
						<AppSetting dataFromParent={'dark'} />
					</Route> */}
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Menu;
