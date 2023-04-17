import styled from 'styled-components';

export const St = {
  HeaderWrapper: styled.header`
    display: flex;

    justify-content: flex-start;
    align-items: center;

    gap: 1rem;

    width: 100%;
    height: fit-content;
    padding: 1rem 0;

    border-bottom: 0.4rem solid ${({ theme }) => theme.colors.Peer_Color_Blue};
    & > h2 {
      ${({ theme }) => theme.fonts.Peer_Noto_B_Title_2}
    }
  `,
};
