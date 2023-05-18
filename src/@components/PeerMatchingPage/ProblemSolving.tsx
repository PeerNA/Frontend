import { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import styled from 'styled-components';
import { PEER_MATCH_MODAL_INFO, PEER_MATCH_MODAL_TYPE, USER_TYPE } from '../../constants/peerMatchInfo';
import { getNextPeerMatch, getPeerReplySubmit, postReplyAnswerData } from '../../lib/api/problem';
import useModal from '../../lib/hooks/useModal';
import ModalPortal from '../../ModalPortals';
import { peerMatchAnswerInfoState, peerMatchInfoState, replyAnswerInfoState } from '../../recoil/atom/problemInfo';
import { userInfoState } from '../../recoil/atom/userInfo';
import { PeerMatchInfo } from '../../type/problem';
import { LearningBtnList, PeerNaBtn, PeerNaModal, QuestionTitle, UserInputBox } from '../@common';
import AutoModal from '../@common/AutoModal';
import LockSolving from './LockSolving';
import TimeStatusBar from './TimeStatusBar';

const ProblemSolving = () => {
  const { isPeerMatchModal, isAutoModal, toggleAutoModal, togglePeerMatchModal } = useModal();
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
    isExistPeer,
  } = peerMatchInfo;
  const { isTimeRemain } = isAnswerSubmit;

  const handleAnswerSubmit = () => {
    modalContentRef.current = PEER_MATCH_MODAL_INFO[PEER_MATCH_MODAL_TYPE.SUBMIT_ANSWER];
    console.log('답안제출', isAnswerSubmit, isPeerMatchModal);
    if (!isAnswerSubmit.isMyAnswer) togglePeerMatchModal();
  };

  const handleNextQuestion = () => {
    console.log('다음문제', isAnswerSubmit);
    modalContentRef.current = PEER_MATCH_MODAL_INFO[PEER_MATCH_MODAL_TYPE.NEXT_QUESTION];
    togglePeerMatchModal();
    getNextQuestion();
  };
  const postReplyAnswer = async () => {
    //문제풀이 완료후 답안제출 확인
    const data = await postReplyAnswerData(replyAnswerInfo);

    if (data?.status === 200 || data?.status === 409) {
      // 시간 남아있으면 이제 동료 검사
      if (isTimeRemain) {
        const data = await getPeerReplySubmit(roomId);

        if (data) {
          setPeerMatchAnswerInfo(data);
          setPeerMatchInfo({ ...peerMatchInfo, isAnswerSubmit: { ...isAnswerSubmit, isMyAnswer: true, isPeerAnswer: true, isTimeRemain: false } });
        }
      } else setPeerMatchInfo({ ...peerMatchInfo, isAnswerSubmit: { ...isAnswerSubmit, isMyAnswer: true } });
    }
    if (!isExistPeer) togglePeerMatchModal();
  };

  const getNextQuestion = async () => {
    modalContentRef.current = PEER_MATCH_MODAL_INFO[PEER_MATCH_MODAL_TYPE.WAIT_PEER];
    const data = await getNextPeerMatch(roomId, peer.id);

    if (data?.status === 404) {
      toggleAutoModal();
    } else if (data?.data) {
      const resPeerMatchInfo = data.data as PeerMatchInfo;
      const {
        roomId,
        historyId,
        problem: { id: problemId },
      } = resPeerMatchInfo;
      setPeerMatchInfo({
        ...peerMatchInfo,
        ...resPeerMatchInfo,
        isAnswerSubmit: {
          isMyAnswer: false,
          isPeerAnswer: false,
          isTimeRemain: true,
        },
      });
      setReplyAnswerInfo({
        answer: '',
        problemId,
        historyId,
        roomId,
      });
      togglePeerMatchModal();
    }
  };

  const handleAnswerTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyAnswerInfo({ ...replyAnswerInfo, answer: e.target.value });
  };

  useEffect(() => {
    if (isExistPeer) postReplyAnswer();
  }, [isExistPeer]);
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
            handleConfirmBtn={modalContentRef.current.type === PEER_MATCH_MODAL_INFO[PEER_MATCH_MODAL_TYPE.SUBMIT_ANSWER].type ? postReplyAnswer : undefined}
          />
        </ModalPortal>
      )}

      {isAutoModal && (
        <ModalPortal>
          <AutoModal content="문제를 다 풀었습니다! 매칭을 종료합니다!" />
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
