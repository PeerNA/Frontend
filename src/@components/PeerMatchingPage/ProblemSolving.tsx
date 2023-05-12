import { useRef } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import styled from 'styled-components';
import { PEER_MATCH_MODAL_INFO, PEER_MATCH_MODAL_TYPE, USER_TYPE } from '../../constants/peerMatchInfo';
import { getNextPeerMatch, getPeerReplySubmit, postReplyAnswerData } from '../../lib/api/problem';
import useModal from '../../lib/hooks/useModal';
import ModalPortal from '../../ModalPortals';
import { peerMatchAnswerInfoState, peerMatchInfoState, replyAnswerInfoState } from '../../recoil/atom/problemInfo';
import { userInfoState } from '../../recoil/atom/userInfo';
import { LearningBtnList, PeerNaBtn, PeerNaModal, QuestionTitle, UserInputBox } from '../@common';
import LockSolving from './LockSolving';
import TimeStatusBar from './TimeStatusBar';

const ProblemSolving = () => {
  const { isPeerMatchModal, togglePeerMatchModal } = useModal();
  const [replyAnswerInfo, setReplyAnswerInfo] = useRecoilState(replyAnswerInfoState);
  const modalContentRef = useRef(PEER_MATCH_MODAL_INFO[PEER_MATCH_MODAL_TYPE.SUBMIT_ANSWER]);
  const [peerMatchInfo, setPeerMatchInfo] = useRecoilState(peerMatchInfoState);
  const [peerMatchAnswerInfo, setPeerMatchAnswerInfo] = useRecoilState(peerMatchAnswerInfoState);
  const { keyword, userInfo } = peerMatchAnswerInfo;

  const myInfo = useRecoilValue(userInfoState);
  const {
    roomId,
    problem: { question },
    peer,
    isAnswerSubmit,
  } = peerMatchInfo;
  const { isTimeRemain } = isAnswerSubmit;

  const handleAnswerSubmit = () => {
    if (!isAnswerSubmit.isMyAnswer) togglePeerMatchModal();
  };

  const handleNextQuestion = () => {
    modalContentRef.current = PEER_MATCH_MODAL_INFO[PEER_MATCH_MODAL_TYPE.NEXT_QUESTION];
    togglePeerMatchModal();
  };
  const postReplyAnswer = async () => {
    //문제풀이 완료후 답안제출 확인
    const data = await postReplyAnswerData(replyAnswerInfo);

    if (data?.status === 200) {
      // 시간 남아있으면 이제 동료 검사
      if (isTimeRemain) {
        const data = await getPeerReplySubmit(roomId);

        if (data) {
          setPeerMatchAnswerInfo(data);
          setPeerMatchInfo({ ...peerMatchInfo, isAnswerSubmit: { ...isAnswerSubmit, isMyAnswer: true, isPeerAnswer: true, isTimeRemain: false } });
        }
      } else setPeerMatchInfo({ ...peerMatchInfo, isAnswerSubmit: { ...isAnswerSubmit, isMyAnswer: true } });
    }
  };

  const getNextQuestion = async () => {
    const data = await getNextPeerMatch(roomId, peer.id);
  };

  const handleAnswerTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyAnswerInfo({ ...replyAnswerInfo, answer: e.target.value });
  };

  return (
    <>
      <St.PeerMatchingWrapper>
        <LearningBtnList isActive={isAnswerSubmit.isMyAnswer} />
        <QuestionTitle question={question} isAnswer={isAnswerSubmit.isMyAnswer} keywordList={keyword} />
        <TimeStatusBar />
        <St.UserInputBoxWrapper>
          <div>
            <UserInputBox
              isModify={!isAnswerSubmit.isMyAnswer}
              userName={myInfo.name}
              imageUrl={myInfo.imageUrl}
              textAreaValue={replyAnswerInfo.answer}
              handleAnswerTextArea={handleAnswerTextArea}
            />
            <PeerNaBtn
              isActive={!isAnswerSubmit.isMyAnswer && Boolean(replyAnswerInfo.answer.length)}
              content={PEER_MATCH_MODAL_INFO[PEER_MATCH_MODAL_TYPE.SUBMIT_ANSWER].type}
              handleBtnClick={handleAnswerSubmit}
            />
          </div>
          <div>
            {!isAnswerSubmit.isPeerAnswer ? (
              <LockSolving />
            ) : (
              <UserInputBox isModify={!isAnswerSubmit} userName={peer.name} imageUrl={peer.imageUrl} content={userInfo[USER_TYPE.PEER].answer} />
            )}
            <PeerNaBtn
              isActive={isAnswerSubmit.isMyAnswer && isAnswerSubmit.isPeerAnswer}
              content={PEER_MATCH_MODAL_INFO[PEER_MATCH_MODAL_TYPE.NEXT_QUESTION].type}
              handleBtnClick={handleNextQuestion}
            />
          </div>
        </St.UserInputBoxWrapper>
      </St.PeerMatchingWrapper>
      {isPeerMatchModal && (
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
