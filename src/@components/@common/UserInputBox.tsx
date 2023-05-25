import React from 'react';
import UserProfile from './UserProfile';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { replyAnswerInfoState } from '../../recoil/atom/problemInfo';
import { LockSolving } from '../PeerMatchingPage';

interface UserInputBoxProps {
  isModify: boolean;
  isPeerAnswer: boolean;
  content?: string;
  userName: string;
  imageUrl: string;
  textAreaValue?: string;
  handleAnswerTextArea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const UserInputBox = (props: UserInputBoxProps) => {
  const { isModify, isPeerAnswer, content, userName, imageUrl, textAreaValue, handleAnswerTextArea } = props;
  return (
    <St.UserInputBoxArticle>
      <UserProfile userName={userName} imageUrl={imageUrl} />
      <St.UserProfileUnderBar />
      {!isPeerAnswer ? (
        <LockSolving />
      ) : handleAnswerTextArea || isModify ? (
        <textarea value={textAreaValue} onChange={handleAnswerTextArea} />
      ) : (
        <p className="input_content">{content}</p>
      )}
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
    textarea,
    .input_content {
      height: 35rem;

      ${({ theme }) => theme.fonts.Peer_Noto_R_SubTitle_1};
      overflow-y: visible;

      resize: none;
    }
  `,
  UserProfileUnderBar: styled.hr`
    width: 100%;

    border: 0.1rem solid ${({ theme }) => theme.colors.Peer_Color_Blue};
  `,
};
