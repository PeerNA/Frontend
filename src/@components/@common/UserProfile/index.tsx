import React from 'react';
import { St } from './style';

interface UserProfileProps {
  userName: string;
  imageUrl: string;
}
const UserProfile = (props: UserProfileProps) => {
  const { userName, imageUrl } = props;

  return (
    <St.UserProfileWrapper>
      <img src={imageUrl} alt="profile-img" />
      <St.ProfileName>{userName}</St.ProfileName>
    </St.UserProfileWrapper>
  );
};

export default UserProfile;
