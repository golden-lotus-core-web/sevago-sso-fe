// Generated from APPS.txt
export enum AppGroup {
  ALL = "All",
  HRM = "HRM",
  WORKFLOW_ENGINE = "Workflow Engine",
  PLATFORM_AND_INFO = "Platform & Info",
  B2B = "B2B",
  OTHER = "Khác",
  CLIENT = "Web", // Các trang đi đến khách hàng
}

export interface AppInfo {
  path: {
    development: string;
    staging: string;
    production: string;
  };
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

export const SSO = {
  development: "https://dev.account.sevago.local",
  staging: "https://sta.account.sevago.local",
  production: "https://account.sevago.com.vn",
};

export const APP_OBJ = {
  // GREEN
  E_HIRING: {
    path: {
      development: "https://dev.admin.office.sevago.local/e-hiring",
      staging: "https://sta.admin.office.sevago.local/e-hiring",
      production: "https://admin.office.sevago.local/e-hiring",
    },
    icon: sevagoEHiringIcon,
    content: "Sevago - Tuyển dụng",
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  HR: {
    path: {
      development: "https://dev.admin.office.sevago.local/hr",
      staging: "https://sta.admin.office.sevago.local/hr",
      production: "https://admin.office.sevago.local/hr",
    },
    icon: sevagoHrmIcon,
    content: "Sevago - Nhân sự",
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  PAYROLL: {
    path: {
      development: "https://dev.admin.office.sevago.local/payroll",
      staging: "https://sta.admin.office.sevago.local/payroll",
      production: "https://admin.office.sevago.local/payroll",
    },
    icon: sevagoPayrollIcon,
    content: "Sevago - Lương",
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  ORG: {
    path: {
      development: "https://dev.admin.office.sevago.local/org",
      staging: "https://sta.admin.office.sevago.local/org",
      production: "https://admin.office.sevago.local/org",
    },
    icon: sevagoChartIcon,
    content: "Sevago - Tổ chức",
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  CHECKIN: {
    path: {
      development: "https://dev.admin.office.sevago.local/checkin",
      staging: "https://sta.admin.office.sevago.local/checkin",
      production: "https://admin.office.sevago.local/checkin",
    },
    icon: sevagoCheckinIcon,
    content: "Sevago - Chấm công",
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },

  // YELLOW
  CHAT: {
    path: {
      development: "https://dev.admin.office.sevago.local/chat",
      staging: "https://sta.admin.office.sevago.local/chat",
      production: "https://admin.office.sevago.local/chat",
    }, // Chat
    icon: sevagoMessageIcon,
    content: "Sevago - Chat",
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  TRAINING: {
    path: {
      development: "https://dev.admin.office.sevago.local/training",
      staging: "https://sta.admin.office.sevago.local/training",
      production: "https://admin.office.sevago.local/training",
    }, // Đào tạo
    icon: sevagoTrainingIcon,
    content: "Sevago - Đào tạo",
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  FORM: {
    path: {
      development: "https://dev.admin.office.sevago.local/form",
      staging: "https://sta.admin.office.sevago.local/form",
      production: "https://admin.office.sevago.local/form",
    }, // Mẫu
    icon: sevagoFormIcon,
    content: "Sevago - Biểu mẫu",
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  INSIDE: {
    path: {
      development: "https://dev.admin.office.sevago.local/inside",
      staging: "https://sta.admin.office.sevago.local/inside",
      production: "https://admin.office.sevago.local/inside",
    }, // Truyền Thông và CSNV
    icon: sevagoInsideIcon,
    content: "Sevago - Inside",
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  BOOKING: {
    path: {
      development: "https://dev.admin.office.sevago.local/booking",
      staging: "https://sta.admin.office.sevago.local/booking",
      production: "https://admin.office.sevago.local/booking",
    },
    icon: sevagoInsideIcon,
    content: "Sevago - Booking",
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },

  // BLUE
  PROJECT: {
    path: {
      development: "https://dev.admin.office.sevago.local/project",
      staging: "https://sta.admin.office.sevago.local/project",
      production: "https://admin.office.sevago.local/project",
    },
    icon: sevagoProjectIcon,
    content: "Sevago - Dự án",
    group: AppGroup.WORKFLOW_ENGINE,
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },
  REQUEST: {
    path: {
      development: "https://dev.admin.office.sevago.local/request",
      staging: "https://sta.admin.office.sevago.local/request",
      production: "https://admin.office.sevago.local/request",
    },
    icon: sevagoRequestIcon,
    content: "Sevago - Đề xuất",
    group: AppGroup.WORKFLOW_ENGINE,
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },
  TRACKING: {
    path: {
      development: "https://dev.admin.office.sevago.local/process",
      staging: "https://sta.admin.office.sevago.local/process",
      production: "https://admin.office.sevago.local/process",
    }, //
    icon: sevagoIcon, //
    content: "Sevago - Tiến trình", //
    group: AppGroup.WORKFLOW_ENGINE, //
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },
  PROCESS: {
    path: {
      development: "https://dev.admin.office.sevago.local/workflow",
      staging: "https://sta.admin.office.sevago.local/workflow",
      production: "https://admin.office.sevago.local/workflow",
    }, // Quy trình
    icon: sevagoIcon,
    content: "Sevago - Quy trình",
    group: AppGroup.WORKFLOW_ENGINE,
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },

  // RED
  FORMULA_PRICE: {
    path: {
      development: "https://dev.formula-price.sevago.local",
      staging: "https://sta.formula-price.sevago.local",
      production: "https://formula-price.sevago.local",
    },
    icon: sevagoIcon,
    content: "Sevago - Tính giá",
    group: AppGroup.B2B,
    color: APP_GROUP_COLOR[AppGroup.B2B],
  },
  E_CATALOGUE: {
    path: {
      development: "https://dev.admin.e-catalogue.sevago.local",
      staging: "https://sta.admin.e-catalogue.sevago.local",
      production: "https://admin.e-catalogue.sevago.local",
    }, // E-Catalogue
    icon: sevagoIcon,
    content: "Sevago - E-Catalogue",
    group: AppGroup.B2B,
    color: APP_GROUP_COLOR[AppGroup.B2B],
  },

  // PINK
  LANDING_PAGE: {
    path: {
      development: "https://dev.admin.landing-page.sevago.local",
      staging: "https://sta.admin.landing-page.sevago.local",
      production: "https://admin.landing-page.sevago.com.vn",
    }, // Landing page
    icon: sevagoIcon,
    content: "Sevago - Landing page",
    group: AppGroup.OTHER,
    color: APP_GROUP_COLOR[AppGroup.OTHER],
  },
};

const SIZE_LARGE = 32;
const SIZE_MEDIUM = 26;
const SIZE_SMALL = 18;
const SIZE_EXTRA_SMALL = 20;
const SIZE_AVATAR_GROUP = 80;
export const SIZE_EXTRA_LARGE = 36;

export type SizeProps =
  | "extra_small"
  | "small"
  | "medium"
  | "large"
  | "extra_large"
  | "avatar_group";

export const MAP_SIZE: Record<string, { width: number; height: number }> = {
  large: { width: SIZE_LARGE, height: SIZE_LARGE },
  medium: { width: SIZE_MEDIUM, height: SIZE_MEDIUM },
  small: { width: SIZE_SMALL, height: SIZE_SMALL },
  extra_small: { width: SIZE_EXTRA_SMALL, height: SIZE_EXTRA_SMALL },
  extra_large: { width: SIZE_EXTRA_LARGE, height: SIZE_EXTRA_LARGE },
  avatar_group: { width: SIZE_AVATAR_GROUP, height: SIZE_AVATAR_GROUP },
};
