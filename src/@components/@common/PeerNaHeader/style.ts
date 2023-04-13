import styled from 'styled-components';

export const St = {
  HeaderWrapper: styled.header`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: fit-content;
    padding: 1rem 3rem;

    background-color: ${({ theme }) => theme.colors.Peer_Color_Sky_1};

    & > img {
      height: 7.2rem;
    }
  `,
};
