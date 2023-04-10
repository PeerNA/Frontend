import styled from 'styled-components';
import { IcPeerNaLogo } from '../assets/icon';

const Login = () => {
  return (
    <LoginWrapper>
      <IcPeerNaLogo />
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;
