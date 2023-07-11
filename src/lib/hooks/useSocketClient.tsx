import { CompatClient, Stomp } from '@stomp/stompjs';
import React, { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import SockJS from 'sockjs-client';
import { messageInfoState } from '../../recoil/atom/messageInfo';
import { peerMatchAnswerInfoState, peerMatchInfoState, replyAnswerInfoState } from '../../recoil/atom/problemInfo';
import { modalInfoState } from '../../recoil/atom/profileBar';
import { wsRoomIdState } from '../../recoil/atom/userInfo';
import { userIdInfo } from '../../recoil/selector/userInfo';
import { PeerMatchInfo } from '../../type/problem';

const useSocketClient = () => {
  const navigate = useNavigate();

  const userId = useRecoilValue(userIdInfo);
  const [wsRoomId, setWsRoomId] = useRecoilState(wsRoomIdState);
  const setChatingMessageInfo = useResetRecoilState(messageInfoState);
  const setModalInfo = useResetRecoilState(modalInfoState);
  const setPeerMatchInfo = useSetRecoilState(peerMatchInfoState);
  const setReplyAnswerInfo = useSetRecoilState(replyAnswerInfoState);
  const [perrMatchAnswerInfo, setPeerMatchAnswerInfo] = useRecoilState(peerMatchAnswerInfoState);

  const client = useRef<CompatClient>();

  const wsConnectHandler = () => {
    if (!client.current)
      client.current = Stomp.over(() => {
        const sock = new SockJS(`${process.env.REACT_APP_IP}stomp/ws`);
        return sock;
      });
  };

  // 동료 찾기
  const wsSubscribePeerWait = () => {
    client.current?.connect({}, () => {
      client.current?.subscribe(`/wait/${userId}`, (message) => {
        if (message) {
          console.log(message);
          const peerMatchInfo = JSON.parse(message.body) as PeerMatchInfo;
          const {
            roomId,
            historyId,
            problem: { id: problemId },
          } = peerMatchInfo;

          console.log(peerMatchInfo);
          // 매칭되어있는 상태
          //   if (res.status === 409) {
          setPeerMatchInfo({
            ...peerMatchInfo,
            isAnswerSubmit: {
              isMyAnswer: false,
              isPeerAnswer: false,
              isTimeRemain: true,
            },
            isExistPeer: true,
          });
          //   } else {
          setChatingMessageInfo();
          setPeerMatchInfo({
            ...peerMatchInfo,
            isAnswerSubmit: {
              isMyAnswer: false,
              isPeerAnswer: false,
              isTimeRemain: true,
            },
            isExistPeer: false,
          });
          setReplyAnswerInfo({ answer: '', historyId, problemId, roomId });
          setPeerMatchAnswerInfo({
            ...perrMatchAnswerInfo,
            peer: { ...peerMatchInfo.peer, likes: 0, replyId: 0, answer: '' },
          });
          //   }

          setModalInfo();
          navigate(`/problem-room/${roomId}`);
          wsUnSubscribePeerWait();
        }
      });
      client.current?.subscribe(`/pub/match/request`, (message) => {
        if (message) {
          console.log(message);
        }
      });
    });
  };

  const wsUnSubscribePeerWait = () => {
    client.current?.unsubscribe(`/wait/${userId}`);
    client.current?.unsubscribe('/pub/match/cancel');
  };
  // 방 구독
  const wsSubscribeRoom = () => {
    client.current?.subscribe(`/match/${wsRoomId}`, (message) => {
      console.log(message);
    });
  };

  // 방 구독 취소
  const wsUnSubscribeRoom = () => {
    client.current?.unsubscribe(`/match/${wsRoomId}`);
  };

  const wsDisconnectHandler = useCallback(() => {
    client.current?.deactivate();
  }, []);
  return { wsConnectHandler, wsSubscribePeerWait, wsUnSubscribePeerWait, wsSubscribeRoom, wsUnSubscribeRoom, client };
};

export default useSocketClient;
