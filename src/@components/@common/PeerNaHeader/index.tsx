import MyProfile from '../MyProfile';
import { St } from './style';
import peerNaLogo from '../../../assets/image/peernaLogo.png';

const PeerNaHeader = () => {
  return (
    <St.HeaderWrapper>
      <img src={peerNaLogo} alt="peerNa-logo" />
      <MyProfile userName="Happhee" />
    </St.HeaderWrapper>
  );
};

export default PeerNaHeader;
