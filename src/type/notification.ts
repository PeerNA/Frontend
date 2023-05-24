import { PeerInfo } from './userInfo';

export interface NotificationInfo {
  notificationId: number;
  type: string;
  answer?: string;
  sender?: PeerInfo;
  msg: string;
  time: string;
}
export interface GetNotificationInfo {
  notificationList: NotificationInfo[];
}
