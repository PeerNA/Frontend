import React from 'react';
import styled from 'styled-components';

const ChatingRoom = () => {
  return (
    <St.ChatingRoomWrapper>
      <div></div>
      <St.ChatInputWrapper>
        <St.ChatInput />
        <button type="submit" onClick={() => console.log('전송')}>
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
  List: styled.ul``,
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
