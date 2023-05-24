import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { answerInfoState } from '../../recoil/atom/profileBar';
import { ProblemAnswerInfo } from '../../type/history';
import styled from 'styled-components';
import useModal from '../../lib/hooks/useModal';
import { UserProfile } from '../@common';
import peernaAnswerLogo from '../../assets/image/peernaAnswerLogo.png';
import ModalPortal from '../../ModalPortals';

interface AnswerCardProps extends ProblemAnswerInfo {
  handlePostLike: (replyId: number) => void;
}
const AnswerCard = (props: AnswerCardProps) => {
  const { replyId, userId, likes, name, imageUrl, answer, handlePostLike } = props;

  const setAnswerInfoState = useSetRecoilState(answerInfoState);

  const { toggleModal } = useModal();

  const handleModalInfo = () => {
    setAnswerInfoState({ userName: name, imageUrl, answer });
    toggleModal(false);
  };

  return (
    <St.AnswerCardWrapper>
      <St.PeernaAnswerLogo backgroundImg={peernaAnswerLogo} onClick={() => handlePostLike(replyId)}>
        <p>{likes}</p>
      </St.PeernaAnswerLogo>
      <p onClick={handleModalInfo}>{answer}</p>

      <UserProfile userName={name} imageUrl={imageUrl} />
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
    padding: 1rem;
    border-radius: 1rem;

    background-image: url(${({ backgroundImg }) => backgroundImg});
    background-repeat: round;
    & > p {
      ${({ theme }) => theme.fonts.Peer_Noto_B_Title_2}
      color : ${({ theme }) => theme.colors.Peer_Color_Purple};
    }

    :hover {
      background-color: ${({ theme }) => theme.colors.Peer_Color_Mint_2};
    }
  `,
};
