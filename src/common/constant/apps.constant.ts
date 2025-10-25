import { UserType } from '../../apis/user/user.enum';
import { ALLOW_USER_TYPES, BOOKING_SCREEN, DASHBOARD_SCREEN, PAGE, WORKFLOW_ENGINE_SCREEN, WORKFLOW_TRACKING_SCREEN } from '../../router/route.constant';
import { AppCategory, type AppModule } from '../enums/app-category.enum';

// Định nghĩa tất cả các module/apps của hệ thống
export const SYSTEM_MODULES: AppModule[] = [
  {
    key: 'sevago-e-hiring',
    title: 'Sevago E-Hiring',
    caption: 'Tuyển Dụng',
    icon: '/images/system/sevago-e-hiring.svg',
    path:  DASHBOARD_SCREEN.JOB_DASHBOARD.path,
    category: AppCategory.HRM,
    allowUserTypes: [UserType.ADMIN, UserType.User, UserType.C_B, UserType.HR, UserType.ROOT],

  },
  {
    key: 'sevago-hrm',
    title: 'Sevago HRM',
    caption: 'Nhân Sự',
    icon: '/images/system/sevago-hrm.svg',
    path:   DASHBOARD_SCREEN.USER.path,
    category: AppCategory.HRM,
    allowUserTypes: ALLOW_USER_TYPES,

  },
  {
    key: 'sevago-payroll',
    title: 'Sevago Payroll',
    caption: 'Tính Lương',
    icon: '/images/system/sevago-payroll.svg',
    path: DASHBOARD_SCREEN.PAYROLL.path,
    category: AppCategory.HRM,
    allowUserTypes: [UserType.ADMIN, UserType.HR, UserType.ROOT],

  },
  {
    key: 'sevago-chart',
    title: 'Sevago Sơ đồ',
    caption: 'Sơ đồ',
    icon: '/images/system/sevago-chart.svg',
    path: DASHBOARD_SCREEN.ORG_STRUCTURE.path,
    category: AppCategory.HRM,
    allowUserTypes: ALLOW_USER_TYPES,

  },
  {
    key: 'sevago-checkin',
    title: 'Sevago Checkin',
    caption: 'Chấm Công',
    icon: '/images/system/sevago-checkin.svg',
    path: DASHBOARD_SCREEN.CHECK_IN.path,
    category: AppCategory.HRM,
    allowUserTypes: ALLOW_USER_TYPES,

  },
  {
    key: 'sevago-project',
    title: 'Sevago Project',
    caption: 'Dự Án',
    icon: '/images/system/sevago-project.svg',
    path: DASHBOARD_SCREEN.PROJECT_TASK.path,
    category: AppCategory.WORKFLOW,
    allowUserTypes: ALLOW_USER_TYPES,

  },
  {
    key: 'sevago-request',
    title: 'Sevago Request',
    caption: 'Đề Xuất',
    icon: '/images/system/sevago-request.svg',
    path:  WORKFLOW_ENGINE_SCREEN.PROPOSAL_JOB_RECRUITMENT.path,
    category: AppCategory.WORKFLOW,
    allowUserTypes: ALLOW_USER_TYPES,

  },
  {
    key: 'sevago-process',
    title: 'Sevago Process',
    caption: 'Quy trình',
    icon: '/images/system/sevago.svg',
    path: PAGE.NOT_FOUND.path,
    category: AppCategory.WORKFLOW,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  {
    key: 'sevago-tracking',
    title: 'Sevago Tracking',
    caption: 'Tiến trình',
    icon: '/images/system/sevago.svg',
    path:   WORKFLOW_TRACKING_SCREEN.MY_TASK.path,
    category: AppCategory.WORKFLOW,
    allowUserTypes: ALLOW_USER_TYPES,
  },

  {
    key: 'sevago-message',
    title: 'Sevago Message',
    caption: 'Chat nhóm',
    icon: '/images/system/sevago-message.svg',
    path: DASHBOARD_SCREEN.CHAT.path,
    category: AppCategory.PLATFORM_INFO,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  {
    key: 'sevago-training',
    title: 'Sevago Training',
    caption: 'Đào Tạo',
    icon: '/images/system/sevago-training.svg',
    path: DASHBOARD_SCREEN.TRAINING.path,
    category: AppCategory.PLATFORM_INFO,
    allowUserTypes: ALLOW_USER_TYPES,

  },
  {
    key: 'sevago-form',
    title: 'Sevago Form',
    caption: 'Biểu mẫu',
    icon: '/images/system/sevago-form.svg',
    path: PAGE.NOT_FOUND.path,
    category: AppCategory.PLATFORM_INFO,
    allowUserTypes: ALLOW_USER_TYPES,
  },
  {
    key: 'sevago-inside',
    title: 'Sevago Inside',
    caption: 'Truyền Thông và CSNV',
    icon: '/images/system/sevago-inside.svg',
    path: DASHBOARD_SCREEN.INSIDE.path,
    category: AppCategory.PLATFORM_INFO,
    allowUserTypes: ALLOW_USER_TYPES,

  },
  {
    key: 'sevago-booking',
    title: 'Sevago Booking',
    caption: 'Cuộc họp',
    icon: '/images/system/sevago-inside.svg',
    path: BOOKING_SCREEN.MEETING_SETTING.path,
    category: AppCategory.PLATFORM_INFO,
    allowUserTypes: ALLOW_USER_TYPES,
  },
];
