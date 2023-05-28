import React from 'react';
import { useRecoilValue } from 'recoil';
import { answerInfoState } from '../../recoil/atom/profileBar';
import { UserProfileInfo } from '../../type/userInfo';
import { PeerNaBtn, UserProfile } from '../@common';
import styled from 'styled-components';
import useModal from '../../lib/hooks/useModal';

const DetailModal = () => {
  const { toggleModal } = useModal();

  const answerInfo = useRecoilValue(answerInfoState);
  const { userName, imageUrl, answer, score } = answerInfo;

  return (
    <St.DetailModalWrapper>
      <St.DetailModalArticle>
        <St.ProfileWrapper>
          <UserProfile userName={userName} imageUrl={imageUrl} score={score} />
        </St.ProfileWrapper>
        <St.AnswerWrapper>{answer}</St.AnswerWrapper>
        <PeerNaBtn content="닫기" isActive={true} handleBtnClick={() => toggleModal(false)} />
      </St.DetailModalArticle>
    </St.DetailModalWrapper>
  );
};

export default DetailModal;

const St = {
  DetailModalWrapper: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: rgba(0, 0, 0, 0.7);

    z-index: 10000;
  `,
  DetailModalArticle: styled.article`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4rem;

    width: fit-content;
    height: fit-content;
    padding: 2.4rem;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: ${({ theme }) => theme.colors.Peer_Color_White_2};
    border: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_2};
    border-radius: 1rem;

    button {
      width: fit-content;
    }
  `,
  ProfileWrapper: styled.div`
    width: 100%;
  `,
  AnswerWrapper: styled.p`
    padding: 2rem 5rem;

    ${({ theme }) => theme.fonts.Peer_Noto_M_SubTitle_1};
    background-color: ${({ theme }) => theme.colors.Peer_Color_Sky_2};
    border-radius: 1rem;
  `,
};
