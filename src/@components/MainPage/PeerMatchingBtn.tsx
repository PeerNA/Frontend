import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { userInfoState } from '../../recoil/atom/userInfo';
import useModal from '../../lib/hooks/useModal';
import { PeerNaModal } from '../@common';
import ModalPortal from '../../ModalPortals';
import { useNavigate } from 'react-router-dom';
import { getPeerMatch } from '../../lib/api/auth';
import { PeerMatchInfo } from '../../type/problem';
import { peerMatchInfoState, replyAnswerInfoState } from '../../recoil/atom/problemInfo';
import { AxiosResponse } from 'axios';
import { modalInfoState } from '../../recoil/atom/profileBar';
import { messageInfoState } from '../../recoil/atom/messageInfo';

const PeerMatchingBtn = () => {
  const navigate = useNavigate();
  const setChatingMessageInfo = useResetRecoilState(messageInfoState);
  const setModalInfo = useResetRecoilState(modalInfoState);
  const setPeerMatchInfo = useSetRecoilState(peerMatchInfoState);
  const setReplyAnswerInfo = useSetRecoilState(replyAnswerInfoState);
  const { isPeernaModal, toggleModal } = useModal();

  const handleMatchingBtn = async () => {
    toggleModal(false);

    try {
      const res = (await getPeerMatch()) as AxiosResponse<PeerMatchInfo, any>;
      if (res) {
        const peerMatchInfo = res.data as PeerMatchInfo;
        const {
          roomId,
          historyId,
          problem: { id: problemId },
        } = peerMatchInfo;
        setPeerMatchInfo({
          ...peerMatchInfo,
          isAnswerSubmit: {
            isMyAnswer: false,
            isPeerAnswer: false,
            isTimeRemain: true,
          },
        });
        setReplyAnswerInfo({ answer: '', historyId, problemId, roomId });
        setChatingMessageInfo();
        setModalInfo();
        navigate(`/problem-room/${roomId}`, { state: { isExistPeer: res.status === 409 } });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <St.MatchigBtnWrapper onClick={handleMatchingBtn}>
        <St.MatchingBtn>동료 매칭 시작</St.MatchingBtn>
        <span className="material-symbols-outlined">arrow_right</span>
      </St.MatchigBtnWrapper>
      {isPeernaModal && (
        <ModalPortal>
          <PeerNaModal modalContent="동료를 매칭중입니다" />
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
