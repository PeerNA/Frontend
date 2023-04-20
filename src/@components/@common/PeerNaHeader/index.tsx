import MyProfile from '../MyProfile';
import { St } from './style';
import peerNaLogo from '../../../assets/image/peernaLogo.png';

const PeerNaHeader = () => {
  return (
    <St.HeaderWrapper>
      <img src={peerNaLogo} alt="peerNa-logo" />
      <MyProfile userName="Happhee" imageUrl="https://avatars.githubusercontent.com/u/79238676?v=4" />
    </St.HeaderWrapper>
  );
};

export default PeerNaHeader;
