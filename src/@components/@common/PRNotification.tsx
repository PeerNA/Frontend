import styled from 'styled-components';
import { deleteNotification, deleteAllNotification, postPRAccept } from '../../lib/api/notification';
import useGetPRNotification from '../../lib/hooks/useGetPRNotification';
import useModal from '../../lib/hooks/useModal';
import NotificationCard from './NotificationCard';
import PeerNaBtn from './PeerNaBtn';

const PRNotification = () => {
  const { notificationList, mutate } = useGetPRNotification();
  const { isNotificationModal, toggleNotificationModal } = useModal();

  const handleDeleteAllNotification = async () => {
    const data = await deleteAllNotification();
    if (data?.status === 200) mutate();
  };
  const handlePostPRAccept = async (notificationId: number) => {
    const data = await postPRAccept(notificationId);
    if (data?.status === 200) mutate();
  };
  const handleDeleteNotification = async (notificationId: number) => {
    const data = await deleteNotification(notificationId);
    if (data?.status === 200) mutate();
  };

  return (
    <St.PRNotificationWrapper>
      <span className="material-symbols-outlined" onClick={() => toggleNotificationModal()}>
        circle_notifications
      </span>
      <St.NotificationNumber>{notificationList && notificationList.length}</St.NotificationNumber>
      {isNotificationModal && (
        <St.NotificationList>
          <St.Header>
            <h2>알림</h2>
            <PeerNaBtn content="모든알림삭제" isActive={true} handleBtnClick={handleDeleteAllNotification} />
          </St.Header>
          {notificationList ? (
            notificationList.map((notificationInfo, idx) => (
              <NotificationCard
                key={`${notificationInfo.time}-${idx}`}
                notificationData={notificationInfo}
                handlePostPRAccept={handlePostPRAccept}
                handleDeleteNotification={handleDeleteNotification}
              />
            ))
          ) : (
            <p>알림이 존재하지 않습니다</p>
          )}
        </St.NotificationList>
      )}
    </St.PRNotificationWrapper>
  );
};

export default PRNotification;

const St = {
  PRNotificationWrapper: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;

    position: relative;

    padding: 1rem;

    border-radius: 2rem;
    > span {
      font-size: 7rem;
      color: ${({ theme }) => theme.colors.Peer_Color_Sky_2};

      :hover {
        color: ${({ theme }) => theme.colors.Peer_Color_Purple};
        cursor: pointer;
      }
    }
  `,
  NotificationNumber: styled.div`
    position: absolute;
    top: 0;
    right: 0.2rem;

    padding: 0.5rem;

    ${({ theme }) => theme.fonts.Peer_Noto_R_Content_3};
    background-color: ${({ theme }) => theme.colors.Peer_Color_Red};
    border-radius: 50%;
  `,
  NotificationList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    position: absolute;
    top: 12rem;
    right: ${0.0003 * window.screen.width}rem;

    width: ${0.04 * window.screen.width}rem;
    height: 50rem;

    overflow-y: scroll;

    padding: 1rem;

    background-color: ${({ theme }) => theme.colors.Peer_Color_White_2};
    border: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_1};
    border-radius: 3rem;

    /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    padding-bottom: 1rem;

    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_1};

    > h2 {
      ${({ theme }) => theme.fonts.Peer_Noto_B_Title_3};
    }
    > button {
      background-color: ${({ theme }) => theme.colors.Peer_Color_Red};

      :hover {
        background-color: ${({ theme }) => theme.colors.Peer_Color_Red_Hover};
      }
    }
  `,
};
