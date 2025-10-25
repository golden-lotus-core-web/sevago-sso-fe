import type { BaseEntity } from '../../common/interfaces/base-item.interface';
import type { User } from '../user/user.entities';
import { NotificationType, NotificationStatus } from './notification.enum';

export interface NotificationSetting extends BaseEntity {
  type: NotificationType;
  isReceive: boolean;
}

export interface Notification extends BaseEntity {
  title: string;
  content: string;
  createdById?: string;
  status: NotificationStatus;
  type: NotificationType;
  path: string;
  userId: string;
  user: User;
}
