import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useRecoilState, useRecoilValue } from 'recoil';
import { peerMatchInfoState } from '../../recoil/atom/problemInfo';
import { userInfoState } from '../../recoil/atom/userInfo';
import { messageInfoState } from '../../recoil/atom/messageInfo';
import ChatingMessage from './ChatingMessage';
import { MessageInfo } from '../../type/message';
import ImgPreview from './ImgPreview';
import { postChatingImage } from '../../lib/api/chating';

const ChatingRoom = () => {
  const myInfo = useRecoilValue(userInfoState);
  const peerMatchInfo = useRecoilValue(peerMatchInfoState);
  const client = useRef<CompatClient>();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatMessageListRef = useRef<MessageInfo[]>([]);
  const [chatMessageList, setChatMessageList] = useRecoilState(messageInfoState);
  const imageDataRef = useRef<File>();
  const chatRef = useRef<HTMLDivElement>(null);
  const [isImgPreview, setIsImgPreview] = useState(false);
  const {
    roomId,
    historyId,
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
    if (imageDataRef.current) {
      const formData = new FormData();
      formData.append('file', imageDataRef.current);

      const postImage = async () => {
        const data = await postChatingImage(formData);
        client.current!.send(
          '/pub/chat/message',
          {},
          JSON.stringify({
            roomId: roomId,
            historyId,
            message: data,
            writerId: myId,
          }),
        );
      };

      postImage();
      imageDataRef.current = undefined;
      setIsImgPreview(false);
    } else if (inputRef.current?.value) {
      console.log('제출1', inputRef.current.value);

      client.current!.send(
        '/pub/chat/message',
        {},
        JSON.stringify({
          roomId: roomId,
          historyId,
          message: inputRef.current.value,
          writerId: myId,
        }),
      );
      inputRef.current.value = '';
      console.log('제출3', inputRef.current?.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmitMessage();
    }
  };

  const handleAttachImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      e.preventDefault();
      const dataItem = e.target.files[0];
      const imgFile = new File([dataItem], 'chatingImg', { type: 'image/png' });
      imageDataRef.current = imgFile;
      setIsImgPreview(true);
    }
  };
  const handleImgPaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    if (e.clipboardData.items[1]) {
      e.preventDefault();

      const dataItem = e.clipboardData.items[1];
      if (dataItem.kind === 'file') {
        const imgBlob = dataItem.getAsFile() as Blob;
        const imgFile = new File([imgBlob], 'chatingImg', { type: 'image/png' });
        imageDataRef.current = imgFile;
        setIsImgPreview(true);
      } else {
        if (inputRef.current) inputRef.current.value = e.clipboardData.getData('Text');
      }
    }
  };

  const handleTextAreaHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = '0.1rem';
      inputRef.current.style.height = 12 + inputRef.current.scrollHeight + 'px';
    }
  };
  useEffect(() => {
    if (!client.current?.abort) connectHandler();
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
        {chatMessageList.map(({ message, time, writerId }, idx) => {
          return (
            <ChatingMessage
              message={message}
              isMyMessage={myId === writerId}
              name={myId === writerId ? name : peerName}
              time={time}
              key={`${message}-${idx}`}
            />
          );
        })}
        <div ref={chatRef} />
      </St.List>
      <St.ChatInputWrapper onKeyDown={handleKeyDown}>
        <St.ChatInput ref={inputRef} onPasteCapture={handleImgPaste} onChange={handleTextAreaHeight} />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleSubmitMessage();
          }}>
          전송
        </button>
        <label className="input-file-button" htmlFor="input-file">
          <span className="material-symbols-outlined">image</span>
        </label>
        <input type="file" id="input-file" style={{ display: 'none' }} onChange={handleAttachImg} />
      </St.ChatInputWrapper>
      {isImgPreview && <ImgPreview imgFile={imageDataRef.current} handleExitBtn={() => setIsImgPreview(!isImgPreview)} handleSubmitBtn={handleSubmitMessage} />}
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

    position: relative;
  `,
  ChatingWrapper: styled.div`
    position: relative;

    width: 100%;
    height: 100vh;
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
  ChatInputWrapper: styled.form`
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;

    position: relative;

    button {
      position: absolute;
      right: 14%;
      top: 20%;

      width: 5rem;
      height: 3rem;

      ${({ theme }) => theme.fonts.Peer_Noto_M_Content_2};
      background-color: ${({ theme }) => theme.colors.Peer_Color_White_1};
      border: none;
      border-radius: 3rem;
    }
    label {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: ${({ theme }) => theme.colors.Peer_Color_Blue};
        font-size: 4rem;

        :hover {
          background-color: ${({ theme }) => theme.colors.Peer_Color_Blue};
        }
      }
    }
  `,
  ChatInput: styled.textarea`
    width: 100%;
    height: 5rem;

    max-width: 80rem;
    padding-left: 1rem;
    padding-right: 4rem;
    overflow-y: hidden;

    word-break: break-all;
    resize: none;

    ${({ theme }) => theme.fonts.Peer_Noto_R_Content_3};
    background-color: ${({ theme }) => theme.colors.Peer_Color_Blue};
    border-radius: 3rem;
    border: none;
  `,
};
