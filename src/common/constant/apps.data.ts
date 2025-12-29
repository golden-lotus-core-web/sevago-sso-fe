// Generated from APPS.txt
export enum AppGroup {
  ALL = 'All',
  HRM = 'HRM',
  WORKFLOW_ENGINE = 'Workflow Engine',
  PLATFORM_AND_INFO = 'Platform & Info',
  B2B = 'B2B',
  OTHER = 'Khác',
  CLIENT = 'Web', // Các trang đi đến khách hàng
}

export interface AppInfo {
  path: {
    local: string;
    develop: string;
    staging: string;
    production: string;
    production_vps: string;
  };
  content: string;
  color: string;
  icon: string;
  group: AppGroup;
}

export const APP_GROUP_COLOR = {
  [AppGroup.WORKFLOW_ENGINE]: 'linear-gradient(180deg, #3990FF 0%, #2662FF 100%)',
  [AppGroup.HRM]: 'linear-gradient(180deg, #09D47B 0%, #07554B 100%)',
  [AppGroup.PLATFORM_AND_INFO]: 'linear-gradient(180deg, #FF9A56 0%, #FF6A43 100%)',
  [AppGroup.B2B]: 'linear-gradient(180deg, #FF9A56 0%, #EB6262 100%)',
  [AppGroup.CLIENT]: 'linear-gradient(180deg, #FF9A56 0%, #FF6A43 100%)',
  [AppGroup.OTHER]: 'linear-gradient(180deg, #A509D4 0%, #1B0755 100%)',
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
  sevagoSystemConfigIcon,
  sevagoTrainingIcon,
} from './icons.constant';

export const ACCOUNT = {
  local: 'http://localhost:6003/account',
  develop: 'https://dev.admin.office.sevago.local/account',
  staging: 'https://sta.admin.office.sevago.local/account',
  production: 'https://admin.office.sevago.com.vn/account',
  production_vps: 'https://admin.office.sevago.com.vn/account',
};

export const SSO = {
  local: 'http://localhost:6000',
  develop: 'https://dev.account.sevago.local',
  staging: 'https://sta.account.sevago.local',
  production: 'https://account.sevago.com.vn',
  production_vps: 'https://account.sevago.com.vn',
};

export const APP_OBJ = {
  // GREEN
  E_HIRING: {
    path: {
      local: 'http://localhost:6003/e-hiring',
      develop: 'https://dev.admin.office.sevago.local/e-hiring',
      staging: 'https://sta.admin.office.sevago.local/e-hiring',
      production: 'https://admin.office.sevago.com.vn/e-hiring',
      production_vps: 'https://admin.office.sevago.com.vn/e-hiring',
    },
    icon: sevagoEHiringIcon,
    content: 'Sevago - Tuyển dụng',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  HR: {
    path: {
      local: 'http://localhost:6003/hr',
      develop: 'https://dev.admin.office.sevago.local/hr',
      staging: 'https://sta.admin.office.sevago.local/hr',
      production: 'https://admin.office.sevago.com.vn/hr',
      production_vps: 'https://admin.office.sevago.com.vn/hr',
    },
    icon: sevagoHrmIcon,
    content: 'Sevago - Nhân sự',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },

  ORG: {
    path: {
      local: 'http://localhost:6003/org',
      develop: 'https://dev.admin.office.sevago.local/org',
      staging: 'https://sta.admin.office.sevago.local/org',
      production: 'https://admin.office.sevago.com.vn/org',
      production_vps: 'https://admin.office.sevago.com.vn/org',
    },
    icon: sevagoChartIcon,
    content: 'Sevago - Tổ chức',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },

  // YELLOW
  CHAT: {
    path: {
      local: 'http://localhost:6003/chat',
      develop: 'https://dev.admin.office.sevago.local/chat',
      staging: 'https://sta.admin.office.sevago.local/chat',
      production: 'https://admin.office.sevago.com.vn/chat',
      production_vps: 'https://admin.office.sevago.com.vn/chat',
    }, // Chat
    icon: sevagoMessageIcon,
    content: 'Sevago - Chat',
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  TRAINING: {
    path: {
      local: 'http://localhost:6003/training',
      develop: 'https://dev.admin.office.sevago.local/training',
      staging: 'https://sta.admin.office.sevago.local/training',
      production: 'https://admin.office.sevago.com.vn/training',
      production_vps: 'https://admin.office.sevago.com.vn/training',
    }, // Đào tạo
    icon: sevagoTrainingIcon,
    content: 'Sevago - Đào tạo',
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  FORM: {
    path: {
      local: 'http://localhost:6003/form',
      develop: 'https://dev.admin.office.sevago.local/form',
      staging: 'https://sta.admin.office.sevago.local/form',
      production: 'https://admin.office.sevago.com.vn/form',
      production_vps: 'https://admin.office.sevago.com.vn/form',
    }, // Mẫu
    icon: sevagoFormIcon,
    content: 'Sevago - Biểu mẫu',
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  INSIDE: {
    path: {
      local: 'http://localhost:6003/inside',
      develop: 'https://dev.admin.office.sevago.local/inside',
      staging: 'https://sta.admin.office.sevago.local/inside',
      production: 'https://admin.office.sevago.com.vn/inside',
      production_vps: 'https://admin.office.sevago.com.vn/inside',
    }, // Truyền Thông và CSNV
    icon: sevagoInsideIcon,
    content: 'Sevago - Inside',
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },
  BOOKING: {
    path: {
      local: 'http://localhost:6003/booking',
      develop: 'https://dev.admin.office.sevago.local/booking',
      staging: 'https://sta.admin.office.sevago.local/booking',
      production: 'https://admin.office.sevago.com.vn/booking',
      production_vps: 'https://admin.office.sevago.com.vn/booking',
    },
    icon: sevagoInsideIcon,
    content: 'Sevago - Booking',
    group: AppGroup.PLATFORM_AND_INFO,
    color: APP_GROUP_COLOR[AppGroup.PLATFORM_AND_INFO],
  },

  // BLUE
  PROJECT: {
    path: {
      local: 'http://localhost:6003/project',
      develop: 'https://dev.admin.office.sevago.local/project',
      staging: 'https://sta.admin.office.sevago.local/project',
      production: 'https://admin.office.sevago.com.vn/project',
      production_vps: 'https://admin.office.sevago.com.vn/project',
    },
    icon: sevagoProjectIcon,
    content: 'Sevago - Dự án',
    group: AppGroup.WORKFLOW_ENGINE,
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },
  REQUEST: {
    path: {
      local: 'http://localhost:6003/request',
      develop: 'https://dev.admin.office.sevago.local/request',
      staging: 'https://sta.admin.office.sevago.local/request',
      production: 'https://admin.office.sevago.com.vn/request',
      production_vps: 'https://admin.office.sevago.com.vn/request',
    },
    icon: sevagoRequestIcon,
    content: 'Sevago - Đề xuất',
    group: AppGroup.WORKFLOW_ENGINE,
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },
  TRACKING: {
    path: {
      local: 'http://localhost:6003/process',
      develop: 'https://dev.admin.office.sevago.local/process',
      staging: 'https://sta.admin.office.sevago.local/process',
      production: 'https://admin.office.sevago.com.vn/process',
      production_vps: 'https://admin.office.sevago.com.vn/process',
    }, //
    icon: sevagoIcon, //
    content: 'Sevago - Tiến trình', //
    group: AppGroup.WORKFLOW_ENGINE, //
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },
  PROCESS: {
    path: {
      local: 'http://localhost:6003/workflow',
      develop: 'https://dev.admin.office.sevago.local/workflow',
      staging: 'https://sta.admin.office.sevago.local/workflow',
      production: 'https://admin.office.sevago.com.vn/workflow',
      production_vps: 'https://admin.office.sevago.com.vn/workflow',
    }, // Quy trình
    icon: sevagoIcon,
    content: 'Sevago - Quy trình',
    group: AppGroup.WORKFLOW_ENGINE,
    color: APP_GROUP_COLOR[AppGroup.WORKFLOW_ENGINE],
  },

  // RED
  FORMULA_PRICE: {
    path: {
      local: 'http://localhost:6005',
      develop: 'https://dev.formula-price.sevago.local',
      staging: 'https://sta.formula-price.sevago.local',
      production: 'https://formula-price.sevago.local',
      production_vps: 'https://formula-price.sevago.local',
    },
    icon: sevagoIcon,
    content: 'Sevago - Tính giá',
    group: AppGroup.B2B,
    color: APP_GROUP_COLOR[AppGroup.B2B],
  },
  E_CATALOGUE: {
    path: {
      local: 'http://localhost:6001',
      develop: 'https://dev.admin.e-catalogue.sevago.local',
      staging: 'https://sta.admin.e-catalogue.sevago.local',
      production: 'https://admin.e-catalogue.sevago.com.vn',
      production_vps: 'https://admin.e-catalogue.sevago.com.vn',
    }, // E-Catalogue
    icon: sevagoIcon,
    content: 'E-Catalogue',
    group: AppGroup.B2B,
    color: APP_GROUP_COLOR[AppGroup.B2B],
  },

  // PINK
  LANDING_PAGE: {
    path: {
      local: 'http://localhost:6006',
      develop: 'https://dev.admin.landing-page.sevago.local',
      staging: 'https://sta.admin.landing-page.sevago.local',
      production: 'https://admin.landing-page.sevago.com.vn',
      production_vps: 'https://admin.landing-page.sevago.com.vn',
    }, // Landing page
    icon: sevagoIcon,
    content: 'Landing page',
    group: AppGroup.OTHER,
    color: APP_GROUP_COLOR[AppGroup.OTHER],
  },

  // HRM
  CHECKIN: {
    path: {
      local: 'http://localhost:3000/timekeeping',
      develop: 'https://dev.hrm-client.sevago.local/timekeeping',
      staging: '',
      production: '',
      production_vps: '',
    },
    icon: sevagoCheckinIcon,
    content: 'Sevago - Chấm công',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  PAYROLL: {
    path: {
      local: 'http://localhost:3000/salary',
      develop: 'https://dev.hrm-client.sevago.local/salary',
      staging: '',
      production: '',
      production_vps: '',
    },
    icon: sevagoPayrollIcon,
    content: 'Sevago - Lương',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  MEAL: {
    path: {
      local: 'http://localhost:3000/meal-management',
      develop: 'https://dev.hrm-client.sevago.local/meal-management',
      staging: '',
      production: '',
      production_vps: '',
    },
    icon: sevagoIcon,
    content: 'Sevago - Đặt cơm',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  LEAVE: {
    path: {
      local: 'http://localhost:3000/leave',
      develop: 'https://dev.hrm-client.sevago.local/leave',
      staging: '',
      production: '',
      production_vps: '',
    },
    icon: sevagoIcon,
    content: 'Sevago - Nghỉ phép',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.HRM],
  },
  SYSTEM_CONFIG: {
    path: {
      local: 'http://localhost:3000/system',
      develop: 'https://dev.hrm-client.sevago.local/system',
      staging: '',
      production: '',
      production_vps: '',
    },
    icon: sevagoSystemConfigIcon,
    content: 'Sevago - Hệ thống',
    group: AppGroup.HRM,
    color: APP_GROUP_COLOR[AppGroup.OTHER],
  },
};

const SIZE_LARGE = 32;
const SIZE_MEDIUM = 26;
const SIZE_SMALL = 18;
const SIZE_EXTRA_SMALL = 20;
const SIZE_AVATAR_GROUP = 80;
export const SIZE_EXTRA_LARGE = 36;

export type SizeProps = 'extra_small' | 'small' | 'medium' | 'large' | 'extra_large' | 'avatar_group';

export const MAP_SIZE: Record<string, { width: number; height: number }> = {
  large: { width: SIZE_LARGE, height: SIZE_LARGE },
  medium: { width: SIZE_MEDIUM, height: SIZE_MEDIUM },
  small: { width: SIZE_SMALL, height: SIZE_SMALL },
  extra_small: { width: SIZE_EXTRA_SMALL, height: SIZE_EXTRA_SMALL },
  extra_large: { width: SIZE_EXTRA_LARGE, height: SIZE_EXTRA_LARGE },
  avatar_group: { width: SIZE_AVATAR_GROUP, height: SIZE_AVATAR_GROUP },
};
