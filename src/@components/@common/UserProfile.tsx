import styled from 'styled-components';
import { UserProfileInfo } from '../../type/userInfo';

const UserProfile = (props: UserProfileInfo) => {
  const { userName, imageUrl } = props;

  return (
    <St.UserProfileWrapper>
      <img src={imageUrl} alt="profile-img" />
      <St.ProfileName>{userName}</St.ProfileName>
    </St.UserProfileWrapper>
  );
};

export default UserProfile;

const St = {
  UserProfileWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 5.9rem;
      height: 5.9rem;

      border-radius: 3rem;
    }
  `,
  ProfileName: styled.p`
    ${({ theme }) => theme.fonts.Peer_Noto_B_Content_1};
    cursor: pointer;
  `,
};
