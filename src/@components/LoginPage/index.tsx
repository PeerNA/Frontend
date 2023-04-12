import styled from 'styled-components';
import { IcGithub, IcPeerNaLogo } from '../../assets/icon';
import { getLoginUserInfo } from '../../lib/api/auth';
import { St } from './style';

const LoginPage = () => {
  const handleGithubLogin = () => {
    window.location.href = `${process.env.REACT_APP_IP}oauth2/authorize/github?redirect_uri='${process.env.REACT_APP_IP}callback'`;
  };
  return (
    <St.LoginPageWrapper>
      <IcPeerNaLogo />
      <St.GithubLoginBtn type="button" onClick={handleGithubLogin}>
        <IcGithub />
        <span>Github 계정으로 로그인</span>
      </St.GithubLoginBtn>
    </St.LoginPageWrapper>
  );
};

export default LoginPage;
