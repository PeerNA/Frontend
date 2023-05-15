import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useRecoilState, useRecoilValue } from 'recoil';
import { peerMatchInfoState } from '../../recoil/atom/problemInfo';
import { userInfoState } from '../../recoil/atom/userInfo';
import { messageInfoState } from '../../recoil/atom/messageInfo';
import ChatingMessage from './ChatingMessage';
import { MessageInfo } from '../../type/message';

const ChatingRoom = () => {
  const myInfo = useRecoilValue(userInfoState);
  const peerMatchInfo = useRecoilValue(peerMatchInfoState);
  const client = useRef<CompatClient>();
  const inputRef = useRef<HTMLInputElement>(null);
  const chatMessageListRef = useRef<MessageInfo[]>([]);
  const [chatMessageList, setChatMessageList] = useRecoilState(messageInfoState);

  const chatRef = useRef<HTMLDivElement>(null);
  const {
    roomId,
    peer: { id: peerId, name: peerName },
  } = peerMatchInfo;
  const { name, id: myId } = myInfo;

  const connectHandler = () => {
    client.current = Stomp.over(() => {
      const sock = new SockJS(`${process.env.REACT_APP_IP}stomp/chat`);
      return sock;
    });
    client.current.connect({}, () => {
      client.current!.subscribe(`/sub/chat/room/${roomId}`, (message) => {
        chatMessageListRef.current = [...chatMessageListRef.current, JSON.parse(message.body)];
        setChatMessageList(chatMessageListRef.current);
        if (chatRef.current) {
          chatRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  };
  const handleSubmitMessage = () => {
    if (inputRef.current) {
      client.current!.send(
        '/pub/chat/message',
        {},
        JSON.stringify({
          roomId: roomId,
          message: inputRef.current.value,
          writerId: myId,
        }),
      );
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    if (!client.current?.active) connectHandler();
    if (chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessageListRef.current]);

  return (
    <St.ChatingRoomWrapper>
      <St.List>
        {chatMessageList.map(({ message, time, writerId }, idx) => (
          <ChatingMessage message={message} isMyMessage={myId === writerId} name={name} time={time} key={`${message}-${idx}`} />
        ))}
        <div ref={chatRef} />
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
    .peer_message {
      margin-right: 50%;
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
