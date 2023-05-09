import { useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { PEER_MATCH_MODAL_INFO, PEER_MATCH_MODAL_TYPE } from '../../constants/peerMatchInfo';
import { postReplyAnswerData } from '../../lib/api/problem';
import useModal from '../../lib/hooks/useModal';
import ModalPortal from '../../ModalPortals';
import { peerMatchInfoState, replyAnswerInfoState } from '../../recoil/atom/problemInfo';
import { userInfoState } from '../../recoil/atom/userInfo';
import { LearningBtnList, PeerNaBtn, PeerNaModal, QuestionTitle, UserInputBox } from '../@common';
import LockSolving from './LockSolving';
import TimeStatusBar from './TimeStatusBar';

const ProblemSolving = () => {
  const { isPeernaModal, toggleModal } = useModal();
  const [replyAnswerInfo, setReplyAnswerInfo] = useRecoilState(replyAnswerInfoState);
  const modalContentRef = useRef(PEER_MATCH_MODAL_INFO[PEER_MATCH_MODAL_TYPE.SUBMIT_ANSWER]);
  const peerMatchInfo = useRecoilValue(peerMatchInfoState);
  const myInfo = useRecoilValue(userInfoState);
  const {
    problem: { question },
    peer,
    isAnswerSubmit,
  } = peerMatchInfo;

  const handleAnswerSubmit = () => {
    toggleModal(false);
  };

  const handleNextQuestion = () => {
    modalContentRef.current = PEER_MATCH_MODAL_INFO[PEER_MATCH_MODAL_TYPE.NEXT_QUESTION];
  };
  const postReplyAnswer = () => {
    // postReplyAnswerData(replyAnswerInfo);
    console.log('보내기');
  };
  const getNextQuestion = () => {
    console.log('다음문제');
  };

  const handleAnswerTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyAnswerInfo({ ...replyAnswerInfo, answer: e.target.value });
  };

  return (
    <>
      <St.PeerMatchingWrapper>
        <LearningBtnList isActive={isAnswerSubmit} />
        <QuestionTitle question={question} isAnswer={isAnswerSubmit} keywordList={[]} />
        <TimeStatusBar />
        <St.UserInputBoxWrapper>
          <div>
            <UserInputBox isModify={!isAnswerSubmit} userName={myInfo.name} imageUrl={myInfo.imageUrl} handleAnswerTextArea={handleAnswerTextArea} />
            <PeerNaBtn
              isActive={!isAnswerSubmit && Boolean(replyAnswerInfo.answer.length)}
              content={PEER_MATCH_MODAL_INFO[PEER_MATCH_MODAL_TYPE.SUBMIT_ANSWER].type}
              handleBtnClick={handleAnswerSubmit}
            />
          </div>
          <div>
            {!isAnswerSubmit ? <LockSolving /> : <UserInputBox isModify={!isAnswerSubmit} userName={peer.name} imageUrl={peer.imageUrl} />}
            <PeerNaBtn
              isActive={isAnswerSubmit}
              content={PEER_MATCH_MODAL_INFO[PEER_MATCH_MODAL_TYPE.NEXT_QUESTION].type}
              handleBtnClick={handleNextQuestion}
            />
          </div>
        </St.UserInputBoxWrapper>
      </St.PeerMatchingWrapper>
      {isPeernaModal && (
        <ModalPortal>
          <PeerNaModal
            modalContent={modalContentRef.current.content}
            handleConfirmBtn={
              modalContentRef.current.type === PEER_MATCH_MODAL_INFO[PEER_MATCH_MODAL_TYPE.SUBMIT_ANSWER].type ? postReplyAnswer : getNextQuestion
            }
          />
        </ModalPortal>
      )}
    </>
  );
};

export default ProblemSolving;

const St = {
  PeerMatchingWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 2rem;
  `,
  UserInputBoxWrapper: styled.section`
    display: grid;
    justify-content: center;
    align-items: center;

    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);

    button {
      width: 100%;
      margin-top: 1rem;
    }
  `,
};
