import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { postReplyAnswerData } from '../../lib/api/problem';
import useModal from '../../lib/hooks/useModal';
import { replyAnswerInfoState } from '../../recoil/atom/problemInfo';
import { calculateTime, answerSubmitInfo } from '../../recoil/selector/problemInfo';

const TimeStatusBar = () => {
  const { isPeernaModal } = useModal();
  const replyAnswerInfo = useRecoilValue(replyAnswerInfoState);
  const maxTime = useRecoilValue(calculateTime);
  const [isAnswerSubmitInfo, setIsAnswerSubmitInfo] = useRecoilState(answerSubmitInfo);
  const { isMyAnswer, isPeerAnswer } = isAnswerSubmitInfo;
  const [time, setTime] = useState(maxTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time) setTime((prev) => prev - 1);
    }, 1000);

    if (isPeernaModal || !isAnswerSubmitInfo.isTimeRemain) {
      clearInterval(timer);
    }

    // 시간 마감 시 -> 자동 제출
    if (!time) {
      const postReplyAnswer = async () => {
        const data = await postReplyAnswerData(replyAnswerInfo);
      };
      // 내 답안 제출 안됨
      if (!isMyAnswer) {
        postReplyAnswer();
      }
      setIsAnswerSubmitInfo({ isMyAnswer: true, isPeerAnswer: true, isTimeRemain: false });
    }

    return () => clearInterval(timer);
  }, [isPeernaModal, time, isAnswerSubmitInfo.isTimeRemain]);

  return (
    <St.Progress>
      <St.Dealt dealt={time > 0 ? (time / maxTime) * 100 : 0} />
    </St.Progress>
  );
};

export default TimeStatusBar;

const St = {
  Progress: styled.div`
    width: 100%;
    height: 2rem;

    background-color: ${({ theme }) => theme.colors.Peer_Color_Sky_3};
    border-radius: 10rem;
  `,
  Dealt: styled.div<{ dealt: number }>`
    width: ${({ dealt }) => dealt + '%'};
    height: 100%;

    background-color: ${({ theme }) => theme.colors.Peer_Color_Mint_1};
    border-radius: 10rem;
  `,
};
