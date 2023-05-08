import React from 'react';
import { useRecoilValue } from 'recoil';
import { answerInfoState } from '../../recoil/atom/profileBar';
import { UserProfileInfo } from '../../type/userInfo';
import { UserProfile } from '../@common';
import styled from 'styled-components';
import useModal from '../../lib/hooks/useModal';

const DetailModal = () => {
  const { toggleModal } = useModal();

  const answerInfo = useRecoilValue(answerInfoState);
  const { userName, imageUrl, answer } = answerInfo;

  return (
    <St.DetailModalArticle>
      <UserProfile userName={userName} imageUrl={imageUrl} />
      <St.AnswerWrapper>{answer}</St.AnswerWrapper>
      {/* <PeerNaBtn content="닫기" isActive={true} handleBtnClick={() => toggleModal()} /> */}
    </St.DetailModalArticle>
  );
};

export default DetailModal;

const St = {
  DetailModalArticle: styled.article`
    display: flex;
    flex-direction: column;

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
  `,
  AnswerWrapper: styled.p`
    padding: 2rem;

    ${({ theme }) => theme.fonts.Peer_Noto_M_SubTitle_1};
    background-color: ${({ theme }) => theme.colors.Peer_Color_Sky_2};
  `,
};
