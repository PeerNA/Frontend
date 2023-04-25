import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { IcBack } from '../../assets/icon';

interface BackPageNavProps {
  backTitle: string;
  isAbsolute: boolean;
}
const BackPageNav = (props: BackPageNavProps) => {
  const { backTitle, isAbsolute } = props;

  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate(-1);
  };

  return (
    <St.BackPageNav onClick={handleBackPage} isAbsolute={isAbsolute}>
      <IcBack />
      <St.BackTitle>{backTitle}</St.BackTitle>
    </St.BackPageNav>
  );
};

export default BackPageNav;

const St = {
  BackPageNav: styled.nav<{ isAbsolute: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    ${({ isAbsolute }) =>
      isAbsolute &&
      css`
        position: absolute;
        top: 1.5rem;
        left: 2%;
      `}

    cursor: pointer;
  `,
  BackTitle: styled.p`
    ${({ theme }) => theme.fonts.Peer_Noto_M_SubTitle_1}
  `,
};
