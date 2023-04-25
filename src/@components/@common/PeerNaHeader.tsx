import styled from 'styled-components';

import peerNaLogo from '../../assets/image/peernaLogo.png';
import MyProfile from './MyProfile';

const PeerNaHeader = () => {
  return (
    <St.HeaderWrapper>
      <img src={peerNaLogo} alt="peerNa-logo" />
      <MyProfile userName="Happhee" imageUrl="https://avatars.githubusercontent.com/u/79238676?v=4" />
    </St.HeaderWrapper>
  );
};

export default PeerNaHeader;

const St = {
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
