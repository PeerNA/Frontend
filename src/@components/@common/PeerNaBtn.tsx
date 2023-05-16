import React from 'react';
import styled from 'styled-components';

interface PeerNaBtnProps {
  content: string;
  isActive: boolean;
  handleBtnClick: () => void;
}

const PeerNaBtn = (props: PeerNaBtnProps) => {
  const { content, isActive, handleBtnClick } = props;

  return (
    <St.PeerNaBtn isActive={isActive} onClick={handleBtnClick} onKeyDown={handleBtnClick}>
      {content}
    </St.PeerNaBtn>
  );
};

export default PeerNaBtn;

const St = {
  PeerNaBtn: styled.button<{ isActive: boolean }>`
    padding: 1rem 1.5rem;

    ${({ theme }) => theme.fonts.Peer_Noto_B_Content_1};
    color: ${({ theme }) => theme.colors.Peer_Color_White_2};
    background-color: ${({ isActive, theme }) => (isActive ? theme.colors.Peer_Color_Green : theme.colors.Peer_Color_Red)};

    border: none;
    border-radius: 1rem;

    &:hover {
      cursor: pointer;
      background-color: ${({ isActive, theme }) => (isActive ? theme.colors.Peer_Color_Green_Hover : theme.colors.Peer_Color_Red_Hover)};
    }
  `,
};
