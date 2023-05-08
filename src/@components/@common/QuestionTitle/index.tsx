import HashTag from './HashTag';
import styled from 'styled-components';

interface QuestionTitleProps {
  question: string;
  keywordList: string[];
  isAnswer: boolean;
}
const QuestionTitle = (props: QuestionTitleProps) => {
  const { question, keywordList, isAnswer } = props;

  return (
    <St.QuestionHeader>
      <St.Title>{question}</St.Title>
      {isAnswer && <HashTag keywordList={keywordList} />}
    </St.QuestionHeader>
  );
};

export default QuestionTitle;

const St = {
  QuestionHeader: styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;

    padding: 1.5rem 0.9rem;

    background-color: ${({ theme }) => theme.colors.Peer_Color_Sky_3};
  `,
  Title: styled.h1`
    ${({ theme }) => theme.fonts.Peer_Noto_B_Title_1};
  `,
};
