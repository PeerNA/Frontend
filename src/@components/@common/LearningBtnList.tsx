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

  const exampleAnswer = useRef('');
  const { isPeernaModal, toggleModal } = useModal();
  const navigate = useNavigate();

  const handleExamAnswer = async () => {
    // const data = await getExampleAnswer(problemId);
    // console.log(data);
    // if (data) {
    // exampleAnswer.current = data?.answer;
    exampleAnswer.current =
      '데이터베이스는 ACID 특징과 같이 트랜잭션이 독립적인 수행을 하도록 한다. 따라서 Locking을 통해, 트랜잭션이 DB를 다루는 동안 다른 트랜잭션이 관여하지 못하도록 막는 것이 필요하다. 하지만 무조건 Locking으로 동시에 수행되는 수많은 트랜잭션들을 순서대로 처리하는 방식으로 구현하게 되면 데이터베이스의 성능은 떨어지게 될 것이다. 그렇다고 해서, 성능을 높이기 위해 Locking의 범위를 줄인다면, 잘못된 값이 처리될 문제가 발생하게 된다.';
    toggleModal(false);
    // }
  };

  const handleReferenceAnswer = () => {
    navigate(`/answerList`);
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
