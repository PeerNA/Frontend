import styled from 'styled-components';

import peerNaLogo from '../assets/image/peernaLogo.png';
import { IcGithub } from '../assets/icon';

const LoginPage = () => {
  const handleGithubLogin = () => {
    window.location.href = `${process.env.REACT_APP_REDIRECT_URL}`;
  };
  return (
    <St.LoginPageWrapper>
      <img src={peerNaLogo} alt="peerNa-logo" />
      <St.GithubLoginBtn type="button" onClick={handleGithubLogin}>
        <IcGithub />
        <span>Github 계정으로 로그인</span>
      </St.GithubLoginBtn>
    </St.LoginPageWrapper>
  );
};

export default LoginPage;

const St = {
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
