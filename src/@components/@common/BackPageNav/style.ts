import styled from 'styled-components';

export const St = {
  BackPageNav: styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    position: absolute;
    top: 1.5rem;
    left: 2%;

    cursor: pointer;
  `,
  BackTitle: styled.p`
    ${({ theme }) => theme.fonts.Peer_Noto_M_SubTitle_1}
  `,
};
