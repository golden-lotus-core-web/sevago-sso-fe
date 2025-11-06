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
    path: "process", //
    icon: sevagoIcon, //
    content: "Sevago - Tiến trình", //
    group: AppGroup.WORKFLOW_ENGINE, //
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },
  [App.PROCESS]: {
    path: "workflow", // Quy trình
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

// Helper function để generate URL từ APP_OBJ path cho office apps
const generateOfficeAppUrl = (
  path: string,
  baseUrl: {
    development: string;
    staging: string;
    production: string;
  }
) => ({
  development: `${baseUrl.development}/${path}`,
  staging: `${baseUrl.staging}/${path}`,
  production: `${baseUrl.production}/${path}`,
});

const OFFICE_BASE_URL = {
  development: "https://dev.admin.office.sevago.local",
  staging: "https://sta.admin.office.sevago.local",
  production: "https://admin.office.sevago.local",
};

// Map từ App enum value sang APPS_ENV key - tự động generate từ tất cả App enum
const getAppEnvKey = (appKey: App): string | null => {
  // App enum có value là tiếng Việt (ví dụ: App.E_HIRING = "Tuyển dụng")
  // Cần tìm key trong enum (ví dụ: "E_HIRING") từ value
  const enumKey = Object.keys(App).find(
    (key) => App[key as keyof typeof App] === appKey
  ) as string | undefined;
  return enumKey || null;
};

// Danh sách các app sử dụng office base URL
const generateOfficeAppsEnv = () => {
  const officeApps: Record<
    string,
    ReturnType<typeof generateOfficeAppUrl>
  > = {};

  const officeAppKeys: App[] = [
    App.E_HIRING,
    App.HR,
    App.PAYROLL,
    App.ORG,
    App.CHECKIN,
    App.CHAT,
    App.TRAINING,
    App.FORM,
    App.INSIDE,
    App.BOOKING,
    App.TRACKING,
    App.REQUEST,
    App.PROJECT,
    App.PROCESS,
  ];

  officeAppKeys.forEach((appKey) => {
    const appInfo = APP_OBJ[appKey];
    const envKey = getAppEnvKey(appKey);
    if (appInfo && envKey) {
      officeApps[envKey] = generateOfficeAppUrl(appInfo.path, OFFICE_BASE_URL);
    }
  });

  return officeApps;
};

export const APPS_ENV = {
  //  url khi ấn đẩy về home sso
  SSO: {
    development: "https://dev.account.sevago.local",
    staging: "https://sta.account.sevago.local",
    production: "https://account.sevago.com.vn",
  },

  // Các url dành cho office - tự động generate từ APP_OBJ
  ...generateOfficeAppsEnv(),

  // Các url ở các app khác
  FORMULA_PRICE: {
    development: "https://dev.formula-price.sevago.local",
    staging: "https://sta.formula-price.sevago.local",
    production: "https://formula-price.sevago.local",
  },
  E_CATALOGUE: {
    development: "https://dev.admin.e-catalogue.sevago.local",
    staging: "https://sta.admin.e-catalogue.sevago.local",
    production: "https://admin.e-catalogue.sevago.local",
  },
  LANDING_PAGE: {
    development: "https://dev.admin.landing-page.sevago.local",
    staging: "https://sta.admin.landing-page.sevago.local",
    production: "https://admin.landing-page.sevago.com.vn",
  },
};
