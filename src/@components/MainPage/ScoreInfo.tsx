import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { IcLevelFive, IcLevelFour, IcLevelOne, IcLevelSix, IcLevelThree, IcLevelTwo } from '../../assets/icon';
import { getUserLevel } from '../../lib/utils/userInfo';
import { userInfoState } from '../../recoil/atom/userInfo';

const ScoreInfo = () => {
  const userInfo = useRecoilValue(userInfoState);
  const { score } = userInfo;

  const LEVEL_ICON = [
    <IcLevelOne key="level_1" />,
    <IcLevelTwo key="level_2" />,
    <IcLevelThree key="level_3" />,
    <IcLevelFour key="level_4" />,
    <IcLevelFive key="level_5" />,
    <IcLevelSix key="level_6" />,
  ];
  return (
    <St.ScoreInfoWrapper>
      <St.Header>내 점수</St.Header>
      <St.SccoreContent>
        {LEVEL_ICON[getUserLevel(score)]}
        <p>{score}점</p>
      </St.SccoreContent>
    </St.ScoreInfoWrapper>
  );
};

export default ScoreInfo;

const St = {
  ScoreInfoWrapper: styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-bottom: 5.4rem;
    margin-left: 0.5rem;
  `,
  Header: styled.h1`
    margin-bottom: 0.7rem;

    ${({ theme }) => theme.fonts.Peer_Noto_B_Title_2}
    color: ${({ theme }) => theme.colors.Peer_Color_Gray};
  `,
  SccoreContent: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 9rem;
    padding: 0 5rem;

    background-color: ${({ theme }) => theme.colors.Peer_Color_White_2};
    border: 0.3rem solid ${({ theme }) => theme.colors.Peer_Color_Purple};
    border-radius: 10rem;

    p {
      ${({ theme }) => theme.fonts.Peer_Noto_B_Title_1};
    }
    > svg {
      width: 8rem;
      height: 8rem;
    }
  `,
};
