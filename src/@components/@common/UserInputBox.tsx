import React from 'react';
import UserProfile from './UserProfile';
import styled from 'styled-components';

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

const St = {
  UserInputBoxArticle: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding: 1.5rem;

    border: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Blue};
    input,
    .input_content {
      height: 35rem;

      ${({ theme }) => theme.fonts.Peer_Noto_R_SubTitle_1};
      overflow-y: visible;
    }
  `,
  UserProfileUnderBar: styled.hr`
    width: 100%;

    border: 0.1rem solid ${({ theme }) => theme.colors.Peer_Color_Blue};
  `,
};
