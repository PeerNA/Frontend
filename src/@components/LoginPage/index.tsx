import styled from 'styled-components';
import { IcGithub, IcPeerNaLogo } from '../../assets/icon';
import { St } from './style';

const LoginPage = () => {
  const handleGithubLogin = () => {
    window.open(
      `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=http://localhost:3000/callback`,
      '_blank',
    );
  };
  return (
    <St.LoginPageWrapper>
      <IcPeerNaLogo />
      <St.GithubLoginBtn type="button" onClick={handleGithubLogin}>
        <IcGithub /> <span>Github 계정으로 로그인</span>
      </St.GithubLoginBtn>
    </St.LoginPageWrapper>
  );
};

export default LoginPage;
