import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import useModal from '../../lib/hooks/useModal';
import { PeerNaModal } from '../@common';
import ModalPortal from '../../ModalPortals';
import { getCategoryRandomProblem } from '../../lib/api/problem';
import { useEffect, useRef } from 'react';
import { userCategoryInfo } from '../../recoil/selector/userInfo';
import useSocketClient from '../../lib/hooks/useSocketClient';

const PeerMatchingBtn = () => {
  const { wsConnectHandler, wsSubscribePeerWait, wsUnSubscribePeerWait } = useSocketClient();

  const category = useRecoilValue(userCategoryInfo);
  const modalContentRef = useRef('');

  const { isPeernaModal, toggleModal } = useModal();

  const handleMatchingBtn = async () => {
    const data = await getCategoryRandomProblem(category);
    if (data) {
      modalContentRef.current = data.question;
      toggleModal(false);
      wsSubscribePeerWait();
    }
  };

  const handleCancelPeerMatch = () => {
    wsUnSubscribePeerWait();
  };

  useEffect(() => {
    wsConnectHandler();
  }, []);
  return (
    <>
      <St.MatchigBtnWrapper onClick={handleMatchingBtn}>
        <St.MatchingBtn>동료 매칭 시작</St.MatchingBtn>
        <span className="material-symbols-outlined">arrow_right</span>
      </St.MatchigBtnWrapper>
      {isPeernaModal && (
        <ModalPortal>
          <PeerNaModal
            modalContent="동료를 기다리는 중입니다! 하단문제를 풀어보세요!"
            subModalContent={`Q. ${modalContentRef.current}`}
            handleCancelBtn={handleCancelPeerMatch}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default PeerMatchingBtn;

const St = {
  MatchigBtnWrapper: styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
    height: 7.2rem;
    padding: 1.9rem 3.6rem;

    background-color: ${({ theme }) => theme.colors.Peer_Color_Blue};
    border: 0.4rem solid ${({ theme }) => theme.colors.Peer_Color_Blue};
    border-radius: 3rem;

    & > span {
      font-size: 5rem;
      color: ${({ theme }) => theme.colors.Peer_Color_White_2};
    }
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.Peer_Color_White_1};

      button,
      span {
        color: ${({ theme }) => theme.colors.Peer_Color_Blue};
      }
    }
  `,
  MatchingBtn: styled.button`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;

    ${({ theme }) => theme.fonts.Peer_Noto_B_Title_2}
    background: none;
    border: none;
  `,
};
