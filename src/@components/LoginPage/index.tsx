import { IcGithub } from '../../assets/icon';
import { St } from './style';
import peerNaLogo from '../../assets/image/peernaLogo.png';

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
