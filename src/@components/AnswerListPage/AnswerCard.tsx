import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { answerInfoState } from '../../recoil/atom/profileBar';
import { ProblemAnswerInfo } from '../../type/history';
import styled from 'styled-components';
import useModal from '../../lib/hooks/useModal';
import { UserProfile } from '../@common';
import peernaAnswerLogo from '../../assets/image/peernaAnswerLogo.png';
import ModalPortal from '../../ModalPortals';

const AnswerCard = (props: ProblemAnswerInfo) => {
  const { replyId, userId, name, imageUrl, answer } = props;

  const setAnswerInfoState = useSetRecoilState(answerInfoState);

  const { isPeernaModal, toggleModal } = useModal();

  useEffect(() => {
    setAnswerInfoState({ userName: name, imageUrl, answer });
  }, [isPeernaModal]);

  return (
    <St.AnswerCardWrapper onClick={() => toggleModal(false)}>
      <St.PeernaAnswerLogo backgroundImg={peernaAnswerLogo}>
        <p>{replyId}</p>
      </St.PeernaAnswerLogo>
      <p>{answer}</p>

      <UserProfile userName={name} imageUrl={imageUrl} />
      {isPeernaModal && (
        <ModalPortal>
          <p>모달입니다</p>
        </ModalPortal>
      )}
    </St.AnswerCardWrapper>
  );
};

export default AnswerCard;

const St = {
  AnswerCardWrapper: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 1.8rem 1.6rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_2};
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.Peer_Color_White_1};

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.Peer_Color_Sky_3};
    }
    & > p {
      width: 75%;
      ${({ theme }) => theme.fonts.Peer_Noto_R_SubTitle_1};
      white-space: nowrap;
      overflow: hidden;

      text-align: center;
      text-overflow: ellipsis;
    }

    img {
      width: 5rem;
      height: 5rem;
    }
  `,
  PeernaAnswerLogo: styled.div<{ backgroundImg: string }>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 5rem;
    height: 4rem;

    background-image: url(${({ backgroundImg }) => backgroundImg});
    background-repeat: round;
    & > p {
      ${({ theme }) => theme.fonts.Peer_Noto_B_Title_2}
      color : ${({ theme }) => theme.colors.Peer_Color_Purple};
    }
  `,
};
