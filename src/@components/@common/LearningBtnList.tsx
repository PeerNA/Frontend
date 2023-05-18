import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { PeerNaBtn, PeerNaModal } from '.';
import { getExampleAnswer } from '../../lib/api/problem';
import useModal from '../../lib/hooks/useModal';
import ModalPortal from '../../ModalPortals';
import { problemInfoState } from '../../recoil/atom/problemInfo';

interface LearningBtnListProps {
  isActive: boolean;
}
const LearningBtnList = (props: LearningBtnListProps) => {
  const { isActive } = props;

  const { problemId } = useRecoilValue(problemInfoState);
  const exampleAnswer = useRef('');
  const { isPeernaModal, toggleModal } = useModal();
  const navigate = useNavigate();

  const handleExamAnswer = async () => {
    if (isActive) {
      const data = await getExampleAnswer(problemId);
      if (data) {
        exampleAnswer.current = data?.answer;
        toggleModal(false);
      }
    }
  };

  const handleReferenceAnswer = () => {
    isActive && window.open(`/answerList`, '_blank');
  };
  return (
    <>
      <St.LearningBtnNav>
        <PeerNaBtn isActive={isActive} content="예시 답안" handleBtnClick={handleExamAnswer} />
        <PeerNaBtn isActive={isActive} content="참고 답안" handleBtnClick={handleReferenceAnswer} />
      </St.LearningBtnNav>
      <ModalPortal>{isPeernaModal && <PeerNaModal modalContent={exampleAnswer.current} />}</ModalPortal>
    </>
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
