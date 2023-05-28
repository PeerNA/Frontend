import styled from 'styled-components';
import { IcLevelFive, IcLevelFour, IcLevelOne, IcLevelSix, IcLevelThree, IcLevelTwo } from '../../assets/icon';
import { getUserLevel } from '../../lib/utils/userInfo';
import { UserProfileInfo } from '../../type/userInfo';

const UserProfile = (props: UserProfileInfo) => {
  const { userName, imageUrl, score } = props;
  const LEVEL_ICON = [
    <IcLevelOne key="level_1" />,
    <IcLevelTwo key="level_2" />,
    <IcLevelThree key="level_3" />,
    <IcLevelFour key="level_4" />,
    <IcLevelFive key="level_5" />,
    <IcLevelSix key="level_6" />,
  ];
  return (
    <St.UserProfileWrapper>
      <St.UserInfoContent>
        <img src={imageUrl} alt="profile-img" />
        <St.ProfileName>{userName}</St.ProfileName>
      </St.UserInfoContent>
      {score && LEVEL_ICON[getUserLevel(score)]}
    </St.UserProfileWrapper>
  );
};

export default UserProfile;

const St = {
  UserProfileWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    img {
      width: 5.9rem;
      height: 5.9rem;

      border-radius: 3rem;
    }
    > svg {
      width: 5.9rem;
      height: 5.9rem;
    }
  `,
  ProfileName: styled.p`
    ${({ theme }) => theme.fonts.Peer_Noto_B_Content_1};
    cursor: pointer;
  `,
  UserInfoContent: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,
};
