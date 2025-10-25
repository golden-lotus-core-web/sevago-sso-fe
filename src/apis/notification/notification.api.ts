import { axiosRequest } from '../../common/config';
import type { ResList } from '../../common/interfaces/res-list.interface';
import type { Notification, NotificationSetting } from './notification.entities';
import type { GetListNotificationDto, GetListNotificationSettingDto, UpdateNotificationDto, UpdateNotificationSettingDto } from './notification.interface';
 
export interface ResSubscribeTopic {
  fcmToken: string;
}

export const updateNotification = async (body: UpdateNotificationDto) => await axiosRequest.put('notification', body);

export const getListNotification = async (params: GetListNotificationDto): Promise<ResList<Notification>> =>
  await axiosRequest.get('notification', { params });

export const updateNotificationSetting = async (id: string, body: UpdateNotificationSettingDto) =>
  await axiosRequest.put('notification-setting/' + id, body);

export const getListNotificationSetting = async (
  params: GetListNotificationSettingDto,
): Promise<ResList<NotificationSetting>> =>
  await axiosRequest.get('notification-setting', {
    params,
  });

export const subscribeTopicByToken = async (token: string): Promise<ResSubscribeTopic> =>
  await axiosRequest.post('notification/subscribe-topic', { token });

export const unSubscribeTopicByToken = async (token: string) =>
  await axiosRequest.post('notification/un-subscribe-topic', { token });
