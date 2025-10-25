import { UserType } from "../apis/user/user.enum";
import type { RouteConstant } from "../common/interfaces/route.interface";
import { RouteType } from "./route.enum";

export const DASHBOARD_BASE = "/dashboard";
const PREFIX_SETTING_JOB = "job-settings/";
export const PREFIX_WORKFLOW_ENGINE = "/workflow";
export const ALLOW_USER_TYPES = [
  UserType.ADMIN,
  UserType.HR,
  UserType.User,
  UserType.C_B,
  UserType.ROOT,
];
export const PAGE: Record<string, RouteConstant> = {
  // Public
  AUTH: { path: "/", type: RouteType.PUBLIC, allowUserTypes: [] },
  ERROR: { path: "/error", type: RouteType.PUBLIC, allowUserTypes: [] },
  NOT_FOUND: { path: "/*", type: RouteType.PUBLIC, allowUserTypes: [] },
  TEST_COMPONENT: {
    path: "/test-component",
    type: RouteType.PUBLIC,
    allowUserTypes: [],
  },

  // Private
  DASHBOARD: {
    path: "/dashboard/",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
};

export const DASHBOARD_SCREEN = {
  DASHBOARD: {
    path: "",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  // dashboard
  PROJECT_DASHBOARD: {
    path: "project-dashboard",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  JOB_DASHBOARD: {
    path: "job-dashboard",
    type: RouteType.PROTECTED,
    allowUserTypes: [UserType.ADMIN, UserType.HR, UserType.ROOT],
  },
  PROJECT_TASK_PROCESS: {
    path: "process-dashboard",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },

  // job
  JOB: {
    path: "job-hr",
    type: RouteType.PROTECTED,
    allowUserTypes: [UserType.ADMIN, UserType.HR, UserType.ROOT],
  },
  JOB_RECRUITMENT: {
    path: "job-recruitment",
    type: RouteType.PROTECTED,
    allowUserTypes: [
      UserType.ADMIN,
      UserType.User,
      UserType.C_B,
      UserType.ROOT,
    ],
  },
  JOB_RECRUITMENT_DETAIL: {
    path: "job-recruitment/:id",
    type: RouteType.PROTECTED,
    allowUserTypes: [
      UserType.ADMIN,
      UserType.User,
      UserType.C_B,
      UserType.ROOT,
    ],
  },
  JOB_DETAIL: {
    path: "job-hr/:id",
    type: RouteType.PROTECTED,
    allowUserTypes: [UserType.ADMIN, UserType.C_B, UserType.HR, UserType.ROOT],
  },
  //setting  job parent
  JOB_TITLE: {
    path: PREFIX_SETTING_JOB + "job-title",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  JOB_BANNER: {
    path: PREFIX_SETTING_JOB + "banner",
    type: RouteType.PROTECTED,
    allowUserTypes: [UserType.ADMIN, UserType.HR, UserType.ROOT],
  },
  JOB_SOCIAL: {
    path: PREFIX_SETTING_JOB + "job-social",
    type: RouteType.PROTECTED,
    allowUserTypes: [UserType.ADMIN, UserType.HR, UserType.ROOT],
  },
  JOB_RECRUITMENT_HISTORY: {
    path: PREFIX_SETTING_JOB + "history-recruitment",
    type: RouteType.PROTECTED,
    allowUserTypes: [
      UserType.ADMIN,
      UserType.User,
      UserType.C_B,
      UserType.ROOT,
    ],
  },
  INDUSTRY: {
    path: PREFIX_SETTING_JOB + "industry",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  EMAIL_TEMPLATE: {
    path: PREFIX_SETTING_JOB + "email-template",
    type: RouteType.PROTECTED,
    allowUserTypes: [UserType.ADMIN, UserType.HR, UserType.ROOT],
  },
  FAQ: {
    path: PREFIX_SETTING_JOB + "faq",
    type: RouteType.PROTECTED,
    allowUserTypes: [UserType.ADMIN, UserType.HR, UserType.ROOT],
  },
  SALARY: {
    path: PREFIX_SETTING_JOB + "salary-range",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },

  // application
  APPLICATION: {
    path: "application-office",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  APPLICATION_OPERATOR: {
    path: "application-operator",
    type: RouteType.PROTECTED,
    allowUserTypes: [UserType.ADMIN, UserType.HR, UserType.ROOT],
  },

  // project - Phần này để tạm sẽ fix thêm 1 lần nữa
  PROJECT_TASK: {
    path: "project-task",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  CREATE_PROJECT: {
    path: "create-project",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  DETAIL_PROJECT: {
    path: "detail-project",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  CREATE_TASK: {
    path: "create-task",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  ALL_PROJECT_OF_DIVISION: {
    path: "all-project-of-division",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },

  // org
  ORG_UNIT_TREE: {
    path: "org-unit-tree",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  ORG_UNIT_RESTORE: {
    path: "org-unit-restore",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  ORG_STRUCTURE: {
    path: "org-structure",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },

  POSITION_TREE: {
    path: "position-tree",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  POSITION_RESTORE: {
    path: "position-restore",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },

  //user
  USER: {
    path: "user-list",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  USER_RESTORE: {
    path: "user-restore",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },

  // other
  ACCOUNT: {
    path: "account",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  NOTIFICATION: {
    path: "notification",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },

  // check in
  CHECK_IN: {
    path: "check-in",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  // payroll
  PAYROLL: {
    path: "payroll",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },

  // training
  TRAINING: {
    path: "training",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },

  // truyền thông
  INSIDE: {
    path: "inside",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },

  //list proposal
  PROPOSAL_SELECTOR: {
    path: "proposal-selector",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },

  // Các loại proposal workflow cụ thể
  PROPOSAL_WORKFLOW_PROJECT: {
    path: "proposal-workflow/project-proposal",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  PROPOSAL_WORKFLOW_JOB: {
    path: "proposal-workflow/job-recruitment",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  PROPOSAL_WORKFLOW_USER: {
    path: "proposal-workflow/user-movement",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  // Chat
  CHAT: {
    path: "chat",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
};

export const BOOKING_SCREEN = {
  MEETING_SETTING: {
    path: "meeting-setting",
  },
};

export const WORKFLOW_ENGINE_SCREEN = {
  //job
  PROPOSAL_JOB_RECRUITMENT: {
    path: "request-job",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  PROPOSAL_WORKFLOW: {
    path: ":type/:id",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  // project
  PROPOSAL_PROJECT_TASK: {
    path: "request-project",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  //user
  PROPOSAL_USER_TRANSFER: {
    path: "user-transfer",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  PROPOSAL_USER_APPOINTMENT: {
    path: "user-appointment",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  PROPOSAL_USER_EXEMPTION: {
    path: "user-exemption",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  PROPOSAL_USER_WORKFLOW_APPOINTMENT: {
    path: "user-appointment/:type",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  PROPOSAL_USER_WORKFLOW_TRANSFER: {
    path: "user-transfer/:type",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  PROPOSAL_USER_WORKFLOW_DEMOTION: {
    path: "user-exemption/:type",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
};

export const WORKFLOW_TRACKING_SCREEN = {
  MY_TASK: {
    path: "my-task",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  MY_WORK: {
    path: "my-work",
    type: RouteType.PROTECTED,
    allowUserTypes: ALLOW_USER_TYPES,
  },
};
