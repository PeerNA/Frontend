import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { deletePeerRoom } from '../../lib/api/problem';
import useModal from '../../lib/hooks/useModal';
import ModalPortal from '../../ModalPortals';
import { roomIdInfo } from '../../recoil/selector/problemInfo';
import { PeerNaBtn, PeerNaModal } from '../@common';

const PeerMatchingExitBtn = () => {
  const roomId = useRecoilValue(roomIdInfo);
  const { isProblemExitModal, toggleProblemExitModal } = useModal();
  const navigate = useNavigate();

  const handleBtnClick = () => {
    toggleProblemExitModal();
  };

  const exitPeerMatching = async () => {
    const data = await deletePeerRoom(roomId);
    if (data === 'success') navigate('/main');
  };

  return (
    <>
      <St.BtnWrapper>
        <PeerNaBtn content={'PeerMatching Exit'} isActive={true} handleBtnClick={handleBtnClick} />
      </St.BtnWrapper>
      {isProblemExitModal && (
        <ModalPortal>
          <PeerNaModal modalContent={'정말로 문제풀이를 종료하시겠습니까?'} handleConfirmBtn={exitPeerMatching} />
        </ModalPortal>
      )}
    </>
  );
};

export default PeerMatchingExitBtn;

const St = {
  BtnWrapper: styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 1rem 2rem;
  `,
};
