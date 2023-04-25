import styled from 'styled-components';
import { PeerNaBtn } from '.';

interface LearningBtnListProps {
  isActive: boolean;
}
const LearningBtnList = (props: LearningBtnListProps) => {
  const { isActive } = props;

  const handleExamAnswer = () => {
    console.log('예시답안');
  };

  const handleReferenceAnswer = () => {
    console.log('참고답안');
  };
  return (
    <St.LearningBtnNav>
      <PeerNaBtn isActive={isActive} content="예시 답안" handleBtnClick={handleExamAnswer} />
      <PeerNaBtn isActive={isActive} content="참고 답안" handleBtnClick={handleReferenceAnswer} />
    </St.LearningBtnNav>
  );
};

export default LearningBtnList;

const St = {
  LearningBtnNav: styled.nav`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;

    padding: 1rem 0rem;
  `,
};
