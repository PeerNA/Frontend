import React from 'react';
import { St } from './style';

interface PeerNaBtnProps {
  content: string;
  isActive: boolean;
  handleBtnClick: () => void;
}

const PeerNaBtn = (props: PeerNaBtnProps) => {
  const { content, isActive, handleBtnClick } = props;

  return (
    <St.PeerNaBtn isActive={isActive} onClick={handleBtnClick}>
      {content}
    </St.PeerNaBtn>
  );
};

export default PeerNaBtn;
