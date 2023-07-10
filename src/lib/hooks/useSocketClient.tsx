import { CompatClient, Stomp } from '@stomp/stompjs';
import React, { useCallback, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import SockJS from 'sockjs-client';
import { wsRoomIdState } from '../../recoil/atom/userInfo';
import { userIdInfo } from '../../recoil/selector/userInfo';

const useSocketClient = () => {
  const userId = useRecoilValue(userIdInfo);
  const [wsRoomId, setWsRoomId] = useRecoilState(wsRoomIdState);
  const client = useRef<CompatClient>();
  const sock = new SockJS(`${process.env.REACT_APP_IP}stomp/ws`);

  // 웹소켓 초기 생성 핸들러
  const wsConnectHandler = () => {
    console.log(client, '클라이언트');

    if (client.current?.abort) client.current = Stomp.over(() => sock);
    console.log(client, '클라이언트 후');
  };

  // 동료 찾기
  const wsSubscribePeerWait = () => {
    client.current?.connect({}, () => {
      client.current?.subscribe(`/wait/${userId}`, (message) => {
        if (message) {
          console.log(message);
          wsUnSubscribePeerWait();
        }
      });
    });
  };

  const wsUnSubscribePeerWait = () => {
    client.current?.unsubscribe(`/wait/${userId}`);
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
  return { wsConnectHandler, wsSubscribePeerWait, wsUnSubscribePeerWait, wsSubscribeRoom, wsUnSubscribeRoom };
};

export default useSocketClient;
