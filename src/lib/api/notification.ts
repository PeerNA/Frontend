import { peerNaClient } from '../axios';

export const deleteNotification = async (notificationId: number) => {
  try {
    const data = await peerNaClient.delete(`api/notification?notificationId=${notificationId}`);
    return data;
  } catch (err) {}
};

export const deleteAllNotification = async () => {
  try {
    const data = await peerNaClient.delete(`api/notification}`);
    return data;
  } catch (err) {}
};
export const postPRAccept = async (notificationId: number) => {
  try {
    const data = await peerNaClient.post(`api/notification/accept?notificationId=${notificationId}`);
    return data;
  } catch (err) {}
};
