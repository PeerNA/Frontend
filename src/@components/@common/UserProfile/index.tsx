import React from 'react';
import { St } from './style';

interface UserProfileProps {
  userName: string;
}
const UserProfile = (props: UserProfileProps) => {
  const { userName } = props;

  return (
    <St.UserProfileWrapper>
      <img src="https://avatars.githubusercontent.com/u/79238676?v=4" alt="profile-img" />
      <St.ProfileName>{userName}님</St.ProfileName>
    </St.UserProfileWrapper>
  );
};

export default UserProfile;
