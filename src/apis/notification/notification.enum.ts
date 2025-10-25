export enum NotificationType {
  SYSTEM = 'Hệ thống',
  APPLICATION = 'Ứng tuyển',
  INTERVIEW_BOOKING = 'Đặt lịch phỏng vấn',
  HIRED = 'Đã tuyển dụng',
  RECRUITMENT_REQUEST = 'Yêu cầu tuyển dụng',
}

export enum UpdateNotificationAction {
  VIEW_ONE = 'View one',
  VIEW_ALL = 'View all',
  DELETE_VIEWED = 'Delete viewed',
  DELETE_ALL = 'Delete all',
  DELETE_ONE = 'Delete one',
}

export enum NotificationStatus {
  VIEWED = 'Đã xem',
  NOT_VIEWED = 'Chưa xem',
}

export enum keyNotification {
  PROPOSAL_APPROVAL = 'proposal_approval', // phê duyệt đề xuất
  JOB_APPROVAL = 'job_approval', // tuyển dụng
  JOB = 'job', // yêu cầu tuyển dụng
  MOVEMENT = 'movement', // di chuyển
  PROJECT_TASK = 'project_task', // nhiệm vụ dự án
  RECRUITMENT = 'recruitment', // phê duyệt tuyển dụng
}
