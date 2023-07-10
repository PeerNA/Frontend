import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { pollingInfoState, userInfoState } from '../../recoil/atom/userInfo';
import useModal from '../../lib/hooks/useModal';
import { PeerNaModal } from '../@common';
import ModalPortal from '../../ModalPortals';
import { useNavigate } from 'react-router-dom';
import { getPeerMatch } from '../../lib/api/auth';
import { PeerMatchInfo } from '../../type/problem';
import { peerMatchAnswerInfoState, peerMatchInfoState, replyAnswerInfoState } from '../../recoil/atom/problemInfo';
import axios, { AxiosResponse } from 'axios';
import { modalInfoState } from '../../recoil/atom/profileBar';
import { messageInfoState } from '../../recoil/atom/messageInfo';
import { deletePeerMatch, getCategoryRandomProblem } from '../../lib/api/problem';
import { sleep } from '../../lib/api/polling';
import { useEffect, useRef } from 'react';
import { userCategoryInfo } from '../../recoil/selector/userInfo';
import useSocketClient from '../../lib/hooks/useSocketClient';

const PeerMatchingBtn = () => {
  const { wsConnectHandler, wsSubscribePeerWait, wsUnSubscribePeerWait } = useSocketClient();
  const navigate = useNavigate();

  const category = useRecoilValue(userCategoryInfo);
  const setChatingMessageInfo = useResetRecoilState(messageInfoState);
  const setModalInfo = useResetRecoilState(modalInfoState);
  const setPeerMatchInfo = useSetRecoilState(peerMatchInfoState);
  const setReplyAnswerInfo = useSetRecoilState(replyAnswerInfoState);
  const [perrMatchAnswerInfo, setPeerMatchAnswerInfo] = useRecoilState(peerMatchAnswerInfoState);
  const modalContentRef = useRef('');

  const { isPeernaModal, toggleModal } = useModal();

  const checkIsExistRoom = (res: AxiosResponse<PeerMatchInfo, any>) => {
    const peerMatchInfo = res.data as PeerMatchInfo;
    const {
      roomId,
      historyId,
      problem: { id: problemId },
    } = peerMatchInfo;

    console.log(peerMatchInfo);
    // 매칭되어있는 상태
    if (res.status === 409) {
      setPeerMatchInfo({
        ...peerMatchInfo,
        isAnswerSubmit: {
          isMyAnswer: false,
          isPeerAnswer: false,
          isTimeRemain: true,
        },
        isExistPeer: true,
      });
    } else {
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
    }

    setModalInfo();
    navigate(`/problem-room/${roomId}`);
  };
  const handleMatchingBtn = () => {
    wsSubscribePeerWait();
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
