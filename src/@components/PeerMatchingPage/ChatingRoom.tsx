import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useRecoilState, useRecoilValue } from 'recoil';
import { peerMatchInfoState } from '../../recoil/atom/problemInfo';
import { userInfoState } from '../../recoil/atom/userInfo';
import { messageInfoState } from '../../recoil/atom/messageInfo';
import MyMessage from './MyMessage';
import PeerMessage from './PeerMessage';

const ChatingRoom = () => {
  const myInfo = useRecoilValue(userInfoState);
  const peerMatchInfo = useRecoilValue(peerMatchInfoState);
  const client = useRef<CompatClient>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [chatMessageList, setChatMessageList] = useRecoilState(messageInfoState);
  const chatRef = useRef<HTMLUListElement>(null);
  const { roomId } = peerMatchInfo;
  const { name } = myInfo;

  const connectHandler = () => {
    client.current = Stomp.over(() => {
      const sock = new SockJS(`${process.env.REACT_APP_IP}stomp/chat`);
      return sock;
    });
    client.current.connect({}, () => {
      client.current!.subscribe(`/sub/chat/room/${roomId}`, (message) => {
        setChatMessageList([...chatMessageList, JSON.parse(message.body)]);
      });

      client.current!.send('/pub/chat/enter', {}, JSON.stringify({ roomId: roomId, writer: name }));
    });
  };
  const handleSubmitMessage = () => {
    if (inputRef.current) {
      client.current!.send('/pub/chat/message', {}, JSON.stringify({ roomId: roomId, message: inputRef.current.value, writer: name }));
      setChatMessageList([...chatMessageList, { roomId: roomId + '', message: inputRef.current.value, writer: name }]);
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    connectHandler();
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessageList]);

  // console.log(chatMessageList);

  return (
    <St.ChatingRoomWrapper>
      <St.List ref={chatRef}>
        {chatMessageList.map(({ message, roomId, writer }, idx) =>
          writer === 'Happhee' ? (
            <MyMessage message={message} roomId={roomId} writer={writer} key={`${message}-${idx}`} />
          ) : (
            <PeerMessage message={message} roomId={roomId} writer={writer} key={`${message}-${idx}`} />
          ),
        )}
      </St.List>
      <St.ChatInputWrapper>
        <St.ChatInput ref={inputRef} />
        <button type="submit" onClick={handleSubmitMessage}>
          전송
        </button>
      </St.ChatInputWrapper>
    </St.ChatingRoomWrapper>
  );
};

export default ChatingRoom;

const St = {
  ChatingRoomWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 80vh;
    padding: 2rem;

    border: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Blue};
    border-radius: 3rem;
  `,
  List: styled.ul`
    display: flex;
    flex-direction: column;

    gap: 1.3rem;
    width: 100%;

    overflow-y: scroll;
    .my_message {
      margin-left: 50%;
    }
  `,
  ChatInputWrapper: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    position: relative;

    button {
      position: absolute;
      right: 5%;
      top: 20%;

      width: 5rem;
      height: 3rem;

      ${({ theme }) => theme.fonts.Peer_Noto_M_Content_2};
      background-color: ${({ theme }) => theme.colors.Peer_Color_White_1};
      border: none;
      border-radius: 3rem;
    }
  `,
  ChatInput: styled.input`
    width: 100%;
    height: 5rem;
    padding: 1rem;

    ${({ theme }) => theme.fonts.Peer_Noto_R_Content_3};
    background-color: ${({ theme }) => theme.colors.Peer_Color_Blue};
    border-radius: 3rem;
    border: none;
  `,
};
