import styled from 'styled-components';

export const St = {
  Header: styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    height: 7.2rem;
    padding: 5% 3%;
    margin-bottom: 5.4rem;

    background-color: ${({ theme }) => theme.colors.Peer_Color_Sky_2};
    border-radius: 10rem;

    & > h1 {
      ${({ theme }) => theme.fonts.Peer_Noto_B_Title_2}
    }

    & > svg {
      width: 6rem;
      height: 6rem;
    }
  `,
};
