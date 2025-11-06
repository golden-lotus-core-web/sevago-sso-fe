// Generated from APPS.txt
export enum AppGroup {
  ALL = "all",
  HRM = "HRM",
  WORKFLOW_ENGINE = "Workflow Engine",
  PLATFORM_AND_INFO = "Platform & Info",
  B2B = "B2B",
  OTHER = "Khác",
  CLIENT = "Web", // Các trang đi đến khách hàng
}

export enum App {
  // HRM
  E_HIRING = "Tuyển dụng",
  HR = "Nhân sự",
  PAYROLL = "Tính lương",
  ORG = "Sơ đồ tổ chức",
  CHECKIN = "Chấm công",

  // PLATFORM_AND_INFO
  PROJECT = "Dự án",
  REQUEST = "Đề xuất",
  PROCESS = "Quy trình",
  TRACKING = "Tiến trình",

  // PLATFORM_AND_INFO
  CHAT = "Chat",
  TRAINING = "Đào tạo",
  FORM = "Biểu mẫu",
  INSIDE = "Thông tin & CSNV",
  BOOKING = "Tài nguyên",

  // B2B
  FORMULA_PRICE = "Tính giá",
  E_CATALOGUE = "E-Catalogue",

  // OTHER
  LANDING_PAGE = "Landing page",
}

export interface AppInfo {
  path: string;
  content: string;
  color: string;
  icon: string;
  group: AppGroup;
}

export const APP_GROUP_COLOR = {
  [AppGroup.WORKFLOW_ENGINE]: "#2E76FF",
  [AppGroup.HRM]: "#09A569",
  [AppGroup.PLATFORM_AND_INFO]: "#FF9454",
  [AppGroup.B2B]: "#EB6262",
  [AppGroup.CLIENT]: "#FF9454",
  [AppGroup.OTHER]: "#EB6262",
};

import {
  sevagoChartIcon,
  sevagoCheckinIcon,
  sevagoEHiringIcon,
  sevagoFormIcon,
  sevagoHrmIcon,
  sevagoIcon,
  sevagoInsideIcon,
  sevagoMessageIcon,
  sevagoPayrollIcon,
  sevagoProjectIcon,
  sevagoRequestIcon,
  sevagoTrainingIcon,
} from "./icons.constant";

export const APP_OBJ: Record<string, AppInfo> = {
  // GREEN
  [App.E_HIRING]: {
    path: "e-hiring",
    icon: sevagoEHiringIcon,
    content: "Sevago - Tuyển dụng",
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  [App.HR]: {
    path: "hr",
    icon: sevagoHrmIcon,
    content: "Sevago - Nhân sự",
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  [App.PAYROLL]: {
    path: "payroll",
    icon: sevagoPayrollIcon,
    content: "Sevago - Lương",
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  [App.ORG]: {
    path: "org",
    icon: sevagoChartIcon,
    content: "Sevago - Tổ chức",
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  [App.CHECKIN]: {
    path: "checkin",
    icon: sevagoCheckinIcon,
    content: "Sevago - Chấm công",
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },

  // YELLOW
  [App.CHAT]: {
    path: "chat", // Chat
    icon: sevagoMessageIcon,
    content: "Sevago - Chat",
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  [App.TRAINING]: {
    path: "training", // Đào tạo
    icon: sevagoTrainingIcon,
    content: "Sevago - Đào tạo",
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  [App.FORM]: {
    path: "form", // Mẫu
    icon: sevagoFormIcon,
    content: "Sevago - Biểu mẫu",
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  [App.INSIDE]: {
    path: "inside", // Truyền Thông và CSNV
    icon: sevagoInsideIcon,
    content: "Sevago - Inside",
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  [App.BOOKING]: {
    path: "booking",
    icon: sevagoInsideIcon,
    content: "Sevago - Booking",
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },

  // BLUE
  [App.PROJECT]: {
    path: "project",
    icon: sevagoProjectIcon,
    content: "Sevago - Dự án",
    group: AppGroup.WORKFLOW_ENGINE,
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },
  [App.REQUEST]: {
    path: "request",
    icon: sevagoRequestIcon,
    content: "Sevago - Đề xuất",
    group: AppGroup.WORKFLOW_ENGINE,
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },
  [App.TRACKING]: {
    path: "workflow", //
    icon: sevagoIcon, //
    content: "Sevago - Tiến trình", //
    group: AppGroup.WORKFLOW_ENGINE, //
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },
  [App.PROCESS]: {
    path: "process", // Quy trình
    icon: sevagoIcon,
    content: "Sevago - Quy trình",
    group: AppGroup.WORKFLOW_ENGINE,
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },

  // RED
  [App.FORMULA_PRICE]: {
    path: "formula-price",
    icon: sevagoIcon,
    content: "Sevago - Tính giá",
    group: AppGroup.B2B,
    color: APP_GROUP_COLOR[AppGroup.B2B],
  },
  [App.E_CATALOGUE]: {
    path: "e-catalogue", // E-Catalogue
    icon: sevagoIcon,
    content: "Sevago - E-Catalogue",
    group: AppGroup.B2B,
    color: APP_GROUP_COLOR[AppGroup.B2B],
  },

  // PINK
  [App.LANDING_PAGE]: {
    path: "landing-page", // Landing page
    icon: sevagoIcon,
    content: "Sevago - Landing page",
    group: AppGroup.OTHER,
    color: APP_GROUP_COLOR[AppGroup.OTHER],
  },
};
