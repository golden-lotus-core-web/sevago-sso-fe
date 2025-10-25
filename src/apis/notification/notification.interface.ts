import type { PageOptionsDto } from '../../common/interfaces/page-options.interface';
import type { NotificationType, UpdateNotificationAction, NotificationStatus } from './notification.enum';

export interface GetListNotificationSettingDto extends PageOptionsDto {
  type?: NotificationType;
  isReceive?: boolean;
}

export interface GetListNotificationDto extends PageOptionsDto {
  type?: NotificationType;
  status?: NotificationStatus;
}

export interface UpdateNotificationSettingDto {
  isReceive: boolean;
}

export interface UpdateNotificationDto {
  updateNotificationAction: UpdateNotificationAction;
  id?: string;
}
export interface NotificationProposalValue {
  total: number;
  job: number;
  movement: number;
  project_task: number;
}

export interface JobApproval {
  total: number;
  recruitment: number;
}
export interface NotificationSummaryItem {
  // job_approval: JobApproval;
  // proposal_approval: NotificationProposalValue;
  movement: number;
  approve_list: number;
  approve: number;
  recruitment: number;
}
