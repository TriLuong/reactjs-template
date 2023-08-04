import Layout from "@/components/Shared/Layout";
import Dashboard from "@/pages/authenticated/Dashboard";
import Login from "@/pages/authentication/Login";
import Signup from "@/pages/authentication/Signup";

export enum ROUTE_PATH {
  AUTHENTICATED = "/",
  DASHBOARD = "/dashboard",

  UN_AUTHENTICATED = "/login",

  HOME = "/home",
  LOGIN = "/login",
  VERIFY_EMAIL = "/verify-email",
  SIGN_IN = "/sign-in",
  SIGN_UP = "/signup",
}

// Import all components here
// import React, { Component } from 'react'

export const ROUTES = [
  // {
  //   path: ROUTE_PATH.AUTHENTICATED,
  //   name: "dashboard",
  //   exact: true,
  //   pageTitle: "HR Dashboard",
  //   component: Layout,
  // },
  {
    path: ROUTE_PATH.DASHBOARD,
    name: "dashboard",
    exact: true,
    pageTitle: "HR Dashboard",
    component: Dashboard,
  },

  {
    path: ROUTE_PATH.LOGIN,
    name: "login",
    exact: true,
    pageTitle: "Tables",
    component: Login,
  },
  {
    path: ROUTE_PATH.SIGN_UP,
    name: "signup",
    exact: true,
    pageTitle: "Tables",
    component: Signup,
  },

  // {
  //   path: "/hr-users",
  //   name: "hr-users",
  //   exact: true,
  //   pageTitle: "Users",
  //   component: Users,
  // },
  // {
  //   path: "/hr-department",
  //   name: "department",
  //   exact: true,
  //   pageTitle: "Departments",
  //   component: Departments,
  // },
  // {
  //   path: "/hr-employee",
  //   name: "employee",
  //   exact: true,
  //   pageTitle: "Employee",
  //   component: Employee,
  // },
  // {
  //   path: "/hr-activities",
  //   name: "activities",
  //   exact: true,
  //   pageTitle: "Activities",
  //   component: Activities,
  // },
  // {
  //   path: "/hr-holidays",
  //   name: "holidays",
  //   exact: true,
  //   pageTitle: "Holidays",
  //   component: Holidays,
  // },
  // {
  //   path: "/hr-events",
  //   name: "events",
  //   exact: true,
  //   pageTitle: "Events",
  //   component: Events,
  // },
  // {
  //   path: "/hr-payroll",
  //   name: "payroll",
  //   exact: true,
  //   pageTitle: "Payroll",
  //   component: Payroll,
  // },
  // {
  //   path: "/hr-accounts",
  //   name: "accounts",
  //   exact: true,
  //   pageTitle: "Accounts",
  //   component: Accounts,
  // },
  // {
  //   path: "/hr-report",
  //   name: "report",
  //   exact: true,
  //   pageTitle: "Report",
  //   component: Report,
  // },
  // // add new routes here

  // //project

  // {
  //   path: "/project-dashboard",
  //   name: "projectDashboard",
  //   exact: true,
  //   pageTitle: "'Project Dashboard",
  //   component: ProjectDashboard,
  // },
  // {
  //   path: "/project-list",
  //   name: "project-list",
  //   exact: true,
  //   pageTitle: "Project",
  //   component: ProjectList,
  // },

  // {
  //   path: "/project-taskboard",
  //   name: "project-taskboard",
  //   exact: true,
  //   pageTitle: "Taskboard",
  //   component: Taskboard,
  // },

  // {
  //   path: "/project-ticket",
  //   name: "project-ticket",
  //   exact: true,
  //   pageTitle: "Ticket List",
  //   component: TicketList,
  // },

  // {
  //   path: "/project-ticket-details",
  //   name: "project-ticket-details",
  //   exact: true,
  //   pageTitle: "Ticket Details",
  //   component: TicketDetails,
  // },
  // {
  //   path: "/project-clients",
  //   name: "project-clients",
  //   exact: true,
  //   pageTitle: "Clients",
  //   component: Clients,
  // },

  // {
  //   path: "/project-todo",
  //   name: "project-todo",
  //   exact: true,
  //   pageTitle: "Todo List",
  //   component: TodoList,
  // },

  // //job portal

  // {
  //   path: "/jobportal-dashboard",
  //   name: "jobportalDashboard",
  //   exact: true,
  //   pageTitle: "Job Dashboard",
  //   component: JobPortalDashboard,
  // },
  // {
  //   path: "/jobportal-positions",
  //   name: "jobportalPositions",
  //   exact: true,
  //   pageTitle: "Job Positions",
  //   component: Positions,
  // },
  // {
  //   path: "/jobportal-applicants",
  //   name: "jobportalpplicants",
  //   exact: true,
  //   pageTitle: "Job Applicants",
  //   component: Applicants,
  // },
  // {
  //   path: "/jobportal-resumes",
  //   name: "jobportalResumes",
  //   exact: true,
  //   pageTitle: "Job Resumes",
  //   component: Resumes,
  // },
  // {
  //   path: "/jobportal-settings",
  //   name: "jobportalSettings",
  //   exact: true,
  //   pageTitle: "Job Settings",
  //   component: Settings,
  // },

  // {
  //   path: "/forgotpassword",
  //   name: "forgotpassword",
  //   exact: true,
  //   pageTitle: "Tables",
  //   component: ForgotPassword,
  // },
  // {
  //   path: "/notfound",
  //   name: "notfound",
  //   exact: true,
  //   pageTitle: "Tables",
  //   component: NotFound,
  // },
  // {
  //   path: "/internalserver",
  //   name: "internalserver",
  //   exact: true,
  //   pageTitle: "Tables",
  //   component: InternalServer,
  // },
  // {
  //   path: "/icons",
  //   name: "icons",
  //   exact: true,
  //   pageTitle: "Icons",
  //   component: Icons,
  // },
  // {
  //   path: "/icons-feather",
  //   name: "icons-feather",
  //   exact: true,
  //   pageTitle: "Icons",
  //   component: IconsFeather,
  // },
  // {
  //   path: "/icons-line",
  //   name: "icons-line",
  //   exact: true,
  //   pageTitle: "Icons",
  //   component: IconsLine,
  // },
  // {
  //   path: "/icons-flag",
  //   name: "icons-flag",
  //   exact: true,
  //   pageTitle: "Icons",
  //   component: IconsFlags,
  // },
  // {
  //   path: "/icons-payments",
  //   name: "icons-payments",
  //   exact: true,
  //   pageTitle: "Icons",
  //   component: IconsPayments,
  // },
  // {
  //   path: "/charts",
  //   name: "charts",
  //   exact: true,
  //   pageTitle: "Charts",
  //   component: Charts,
  // },
  // {
  //   path: "/charts-e",
  //   name: "charts-e",
  //   exact: true,
  //   pageTitle: "Charts",
  //   component: ChartsE,
  // },
  // {
  //   path: "/charts-c3",
  //   name: "charts-c3",
  //   exact: true,
  //   pageTitle: "Charts",
  //   component: ChartsC3,
  // },
  // {
  //   path: "/charts-knob",
  //   name: "charts-knob",
  //   exact: true,
  //   pageTitle: "Charts",
  //   component: ChartsKnob,
  // },
  // {
  //   path: "/charts-sparkline",
  //   name: "charts-sparkline",
  //   exact: true,
  //   pageTitle: "Charts",
  //   component: ChartsSparkline,
  // },

  // {
  //   path: "/forms",
  //   name: "forms",
  //   exact: true,
  //   pageTitle: "Forms Elements",
  //   component: Forms,
  // },
  // {
  //   path: "/form-advanced",
  //   name: "form-advanced",
  //   exact: true,
  //   pageTitle: "Forms Elements",
  //   component: FormAdvanced,
  // },
  // {
  //   path: "/form-validation",
  //   name: "form-validation",
  //   exact: true,
  //   pageTitle: "Forms Elements",
  //   component: FormValidation,
  // },
  // {
  //   path: "/form-wizard",
  //   name: "form-wizard",
  //   exact: true,
  //   pageTitle: "Forms Elements",
  //   component: FormWizard,
  // },
  // {
  //   path: "/form-summernote",
  //   name: "form-summernote",
  //   exact: true,
  //   pageTitle: "Forms Elements",
  //   component: FormSummernote,
  // },

  // {
  //   path: "/tables",
  //   name: "tables",
  //   exact: true,
  //   pageTitle: "Tables",
  //   component: Tables,
  // },
  // {
  //   path: "/tables-datatable",
  //   name: "tables-datatable",
  //   exact: true,
  //   pageTitle: "Tables",
  //   component: DataTables,
  // },
  // {
  //   path: "/tables-color",
  //   name: "tables-color",
  //   exact: true,
  //   pageTitle: "Tables",
  //   component: TablesColor,
  // },
  // {
  //   path: "/tables-basic",
  //   name: "tables-basic",
  //   exact: true,
  //   pageTitle: "Tables",
  //   component: TablesBasic,
  // },

  // {
  //   path: "/widgets",
  //   name: "widgets",
  //   exact: true,
  //   pageTitle: "Widgets",
  //   component: Widgets,
  // },
  // {
  //   path: "/w-card",
  //   name: "w-card",
  //   exact: true,
  //   pageTitle: "Widgets",
  //   component: WCard,
  // },
  // {
  //   path: "/w-statistics",
  //   name: "w-statistics",
  //   exact: true,
  //   pageTitle: "Widgets",
  //   component: WStatistics,
  // },
  // {
  //   path: "/w-data",
  //   name: "w-data",
  //   exact: true,
  //   pageTitle: "Widgets",
  //   component: WData,
  // },
  // {
  //   path: "/w-social",
  //   name: "w-social",
  //   exact: true,
  //   pageTitle: "Widgets",
  //   component: WSocial,
  // },
  // {
  //   path: "/w-other",
  //   name: "w-other",
  //   exact: true,
  //   pageTitle: "Widgets",
  //   component: WOther,
  // },
  // {
  //   path: "/page-search",
  //   name: "page-search",
  //   exact: true,
  //   pageTitle: "Search",
  //   component: Search,
  // },
  // {
  //   path: "/app-calendar",
  //   name: "app-calendar",
  //   exact: true,
  //   pageTitle: "Calendar",
  //   component: AppCalendar,
  // },
  // {
  //   path: "/app-contact",
  //   name: "app-contact",
  //   exact: true,
  //   pageTitle: "Contact",
  //   component: AppContact,
  // },
  // {
  //   path: "/app-chat",
  //   name: "app-chat",
  //   exact: true,
  //   pageTitle: "Friends Group",
  //   component: AppChart,
  // },
  // {
  //   path: "/app-filemanager",
  //   name: "app-filemanager",
  //   exact: true,
  //   pageTitle: "File Manager",
  //   component: AppFilemanager,
  // },
  // {
  //   path: "/app-setting",
  //   name: "app-setting",
  //   exact: true,
  //   pageTitle: "App Setting",
  //   component: AppSetting,
  // },
  // {
  //   path: "/profile",
  //   name: "profile",
  //   exact: true,
  //   pageTitle: "My Profile",
  //   component: Profile,
  // },
  // {
  //   path: "/maps",
  //   name: "maps",
  //   exact: true,
  //   pageTitle: "Vector Maps",
  //   component: Maps,
  // },
  // {
  //   path: "/gallery",
  //   name: "gallery",
  //   exact: true,
  //   pageTitle: "Image Gallery",
  //   component: Gallery,
  // },
];
