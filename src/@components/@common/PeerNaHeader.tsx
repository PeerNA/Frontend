import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import peerNaLogo from '../../assets/image/peernaLogo.png';
import { userInfoState } from '../../recoil/atom/userInfo';
import MyProfile from './MyProfile';
import PRNotification from './PRNotification';

const PeerNaHeader = () => {
  const userInfo = useRecoilValue(userInfoState);
  const navigate = useNavigate();

  const { imageUrl, name } = userInfo;
  return (
    <St.HeaderWrapper>
      <img src={peerNaLogo} alt="peerNa-logo" onClick={() => navigate('/main')} />
      <St.ProfileWrapper>
        <PRNotification />
        <MyProfile userName={name} imageUrl={imageUrl} />
      </St.ProfileWrapper>
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

      cursor: pointer;
    }
  `,
  ProfileWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
