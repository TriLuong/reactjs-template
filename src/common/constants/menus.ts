import { IMenus } from "@/types/app";

const menus: IMenus = [
  {
    id: "1",
    icon: "dashboard",
    iconDetails: "home",
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    id: "_11",
    menuParentId: "-1",
    breadcrumbParentId: "1",
    name: "Websocket",
    route: "/ws",
  },

  {
    id: "2",
    breadcrumbParentId: "1",
    name: "All Projects",
    nameDetails: "All Projects",
    icon: "folder",
    route: "/projects",
  },
  {
    id: "_21",
    menuParentId: "-1",
    breadcrumbParentId: "2",
    name: "Project Detail",
    nameDetails: "Project Detail",
    route: "/projects/:id",
  },
  {
    id: "_211",
    menuParentId: "-1",
    breadcrumbParentId: "_21",
    name: "View conversation",
    route: "/projects/:id/conversations",
  },

  {
    id: "3",
    breadcrumbParentId: "1",
    name: "Users",
    icon: "users",
    route: "/users",
  },
  {
    id: "_31",
    breadcrumbParentId: "1",
    menuParentId: "3",
    name: "Freelancers",
    route: "/users/freelancers",
  },
  {
    id: "_311",
    menuParentId: "-1",
    breadcrumbParentId: "_31",
    name: "Freelancers",
    route: "/users/freelancers/:id",
  },

  {
    id: "_32",
    breadcrumbParentId: "1",
    menuParentId: "3",
    name: "Clients",
    route: "/users/clients",
  },
  {
    id: "_321",
    menuParentId: "-1",
    breadcrumbParentId: "_32",
    name: "Clients",
    route: "/users/clients/:id",
  },

  {
    id: "4",
    menuParentId: "-1",
    name: "Profile",
    icon: "user",
    route: "/profile",
  },
  {
    id: "_41",
    menuParentId: "-1",
    breadcrumbParentId: "4",
    name: "Settings",
    route: "/profile/setting",
  },
  {
    id: "_411",
    menuParentId: "-1",
    breadcrumbParentId: "_41",
    name: "Add new Team Member",
    route: "/profile/setting/new",
  },
];

export const content = [
  {
    id: "Directories",
    label: "Directories",
  },
  {
    id: 1,
    icon: "icon-rocket",
    label: "HRMS",
    to: "#!",
    children: [
      {
        id: 3,
        label: "Dashboard",
        to: "/dashboard",
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
    children: [
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
    children: [
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
    children: [
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

export default {
  menus,
};
