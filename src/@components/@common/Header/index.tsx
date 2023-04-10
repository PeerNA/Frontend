import { IcPeerNaLogo } from '../../../assets/icon';
import MyProfile from '../MyProfile';
import { St } from './style';

const Header = () => {
  return (
    <St.HeaderWrapper>
      <IcPeerNaLogo />
      <MyProfile userName="Happhee" />
    </St.HeaderWrapper>
  );
};

export default Header;
