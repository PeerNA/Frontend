import styled from 'styled-components';

export const St = {
  LoginPageWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 3rem;

    width: 100%;
    height: 100%;

    & > img {
      height: 31.4rem;
    }
  `,
  GithubLoginBtn: styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;

    width: 30rem;
    padding: 1rem;

    > span {
      ${({ theme }) => theme.fonts.Peer_Noto_B_Content_1}
    }
    color: ${({ theme }) => theme.colors.Peer_Color_White_2};
    background-color: ${({ theme }) => theme.colors.Peer_Color_Black};

    border-radius: 0.5rem;
    border: none;
  `,
};
