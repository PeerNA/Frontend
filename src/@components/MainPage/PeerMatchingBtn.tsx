import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { userInfoState } from '../../recoil/atom/userInfo';
import useModal from '../../lib/hooks/useModal';
import { PeerNaModal } from '../@common';
import ModalPortal from '../../ModalPortals';
import { useNavigate } from 'react-router-dom';
import { getPeerMatch } from '../../lib/api/auth';
import { PeerMatchInfo } from '../../type/problem';
import { peerMatchInfoState, replyAnswerInfoState } from '../../recoil/atom/problemInfo';

const PeerMatchingBtn = () => {
  const navigate = useNavigate();
  const setPeerMatchInfo = useSetRecoilState(peerMatchInfoState);
  const setReplyAnswerInfo = useSetRecoilState(replyAnswerInfoState);
  const { isPeernaModal, toggleModal } = useModal();

  const handleMatchingBtn = async () => {
    toggleModal(false);

    try {
      const data = await getPeerMatch();
      if (data) {
        const peerMatchInfo = data as PeerMatchInfo;
        const {
          historyId,
          problem: { id: problemId },
        } = peerMatchInfo;
        setPeerMatchInfo(peerMatchInfo);
        setReplyAnswerInfo({ answer: '', historyId, problemId });

        toggleModal(false, true);

        const { roomId } = peerMatchInfo;
        navigate(`/problem-room/${roomId}`);
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
