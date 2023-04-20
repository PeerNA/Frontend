import React from 'react';
import HashTag from './HashTag';
import { St } from './style';

interface QuestionTitleProps {
  question: string;
  isAnswer: boolean;
}
const QuestionTitle = (props: QuestionTitleProps) => {
  const { question, isAnswer } = props;

  return (
    <St.QuestionHeader>
      <St.Title>{question}</St.Title>
      {isAnswer && <HashTag hashTagList={['스레드', '자원', '공유']} />}
    </St.QuestionHeader>
  );
};

export default QuestionTitle;
