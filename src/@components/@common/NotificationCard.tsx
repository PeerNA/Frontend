import { useState } from 'react';
import styled from 'styled-components';
import { NOTIFICATION_TYPE, NOTIFICATION_TYPE_INDEX } from '../../constants/notification';
import { NotificationInfo } from '../../type/notification';
import PeerNaBtn from './PeerNaBtn';
import ALLOW_PR from '../../assets/image/allow_pr.png';
import PR_REQUEST from '../../assets/image/unallow_pr.png';
import FLLOW_GITHUB from '../../assets/image/follow_github.png';
import COFLLOW_GITHUB from '../../assets/image/co_follow_github.png';
import UserProfile from './UserProfile';

interface NotificationCardProps {
  notificationData: NotificationInfo;
  handlePostPRAccept: (notificationId: number) => Promise<void>;
  handleDeleteNotification: (notificationId: number) => Promise<void>;
}
const NotificationCard = (props: NotificationCardProps) => {
  const { notificationData, handleDeleteNotification, handlePostPRAccept } = props;
  const { notificationId, type, answer, sender, msg, time } = notificationData;
  const [isNotificationDetailModal, setIsNotificationDetailModal] = useState(false);

  const getInfoType = () => {
    switch (type) {
      case NOTIFICATION_TYPE[NOTIFICATION_TYPE_INDEX.PULL_REQ]:
      case NOTIFICATION_TYPE[NOTIFICATION_TYPE_INDEX.PULL_REQ_ACC]:
        return <PeerNaBtn content="PR보기" isActive={true} handleBtnClick={() => setIsNotificationDetailModal(!isNotificationDetailModal)} />;
      default:
        return <PeerNaBtn content="유저정보" isActive={true} handleBtnClick={() => setIsNotificationDetailModal(!isNotificationDetailModal)} />;
    }
  };
  const getButtonType = () => {
    switch (type) {
      case NOTIFICATION_TYPE[NOTIFICATION_TYPE_INDEX.PULL_REQ]:
        return <PeerNaBtn content="PR허용" isActive={true} handleBtnClick={() => handlePostPRAccept(notificationId)} />;
      default:
        return <PeerNaBtn content="읽음" isActive={true} handleBtnClick={() => handleDeleteNotification(notificationId)} />;
    }
  };

  const getIconType = () => {
    switch (type) {
      case NOTIFICATION_TYPE[NOTIFICATION_TYPE_INDEX.PULL_REQ]:
        return <img src={PR_REQUEST} alt="notification-icon" />;
      case NOTIFICATION_TYPE[NOTIFICATION_TYPE_INDEX.FOLLOW]:
        return <img src={FLLOW_GITHUB} alt="notification-icon" />;
      case NOTIFICATION_TYPE[NOTIFICATION_TYPE_INDEX.PULL_REQ_ACC]:
        return <img src={ALLOW_PR} alt="notification-icon" />;
      default:
        return <img src={COFLLOW_GITHUB} alt="notification-icon" />;
    }
  };
  return (
    <St.NotificationCardWrapper>
      {<St.NotificationIcon>{getIconType()}</St.NotificationIcon>}

      <St.ContentWrapper>
        <St.ContentInfo>
          <p>{msg}</p>
          <p>{time}</p>
        </St.ContentInfo>
        <St.ModalWrapper>
          {getInfoType()}
          {isNotificationDetailModal &&
            (answer ? (
              <St.ModalInfo>{answer}</St.ModalInfo>
            ) : (
              <St.UserInfo>{sender && <UserProfile userName={sender.name} imageUrl={sender.imageUrl} />}</St.UserInfo>
            ))}
        </St.ModalWrapper>
        {getButtonType()}
      </St.ContentWrapper>
    </St.NotificationCardWrapper>
  );
};

export default NotificationCard;

const St = {
  NotificationCardWrapper: styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    padding: 2rem;

    border-bottom: 0.3rem dotted ${({ theme }) => theme.colors.Peer_Color_Sky_1};
  `,
  NotificationIcon: styled.div`
    display: flex;
    align-items: center;
    > img {
      width: 5rem;
    }
  `,
  ContentWrapper: styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 1fr 1fr;
    gap: 0.4rem;

    p {
      ${({ theme }) => theme.fonts.Peer_Noto_B_Content_1};
    }

    button {
      width: 100%;
      height: fit-content;
      ${({ theme }) => theme.fonts.Peer_Noto_R_Content_3};
      background-color: ${({ theme }) => theme.colors.Peer_Color_Mint_1};

      :hover {
        background-color: ${({ theme }) => theme.colors.Peer_Color_Sky_2};
      }
    }
  `,

  ContentInfo: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ModalWrapper: styled.div`
    position: relative;
  `,
  ModalInfo: styled.div`
    position: absolute;
    top: 5rem;
    left: -20rem;

    width: ${0.02 * window.screen.width}rem;
    padding: 2rem;

    ${({ theme }) => theme.fonts.Peer_Noto_R_Content_3};
    background-color: ${({ theme }) => theme.colors.Peer_Color_Sky_2};
    border-radius: 1rem;

    z-index: 100;
  `,
  UserInfo: styled.div`
    position: absolute;
    top: 5rem;
    left: -10rem;

    width: fit-content;
    padding: 2rem;

    ${({ theme }) => theme.fonts.Peer_Noto_R_Content_3};
    background-color: ${({ theme }) => theme.colors.Peer_Color_Mint_2};
    border-radius: 1rem;

    z-index: 100;
  `,
};
