import React from 'react';
import UserProfile from '../UserProfile';
import { St } from './style';

interface UserInputBoxProps {
  isModify: boolean;
  content?: string;
  userName: string;
  imageUrl: string;
}
const UserInputBox = (props: UserInputBoxProps) => {
  const { isModify, content, userName, imageUrl } = props;

  return (
    <St.UserInputBoxArticle>
      <UserProfile userName={userName} imageUrl={imageUrl} />
      <St.UserProfileUnderBar />
      {isModify ? <input type="text" /> : <p className="input_content">{content}</p>}
    </St.UserInputBoxArticle>
  );
};

export default UserInputBox;
