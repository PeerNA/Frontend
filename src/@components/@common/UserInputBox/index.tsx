import React from 'react';
import UserProfile from '../UserProfile';
import { St } from './style';

interface UserInputBoxProps {
  isModify: boolean;
  content?: string;
}
const UserInputBox = (props: UserInputBoxProps) => {
  const { isModify, content } = props;

  return (
    <St.UserInputBoxArticle>
      <UserProfile userName="happhee" />
      {isModify ? <input type="text" /> : <p className="input_content">{content}</p>}
    </St.UserInputBoxArticle>
  );
};

export default UserInputBox;
