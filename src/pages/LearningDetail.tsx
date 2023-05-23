import { useParams } from 'react-router-dom';
import useGetLearningDetail from '../lib/hooks/useGetLearningDetail';
import styled from 'styled-components';

import { BackPageNav, UserInputBox, Error404, PeerNaHeader, LearningBtnList, QuestionTitle } from '../@components/@common';
import { useRecoilValue } from 'recoil';
import { problemInfoState } from '../recoil/atom/problemInfo';

const LearningDetailPage = () => {
  const { historyId } = useParams<{ historyId: string }>();
  const historyIdToNumber = Number(historyId) as number;

  const { historyDetailInfo, isLoading, isError } = useGetLearningDetail(historyIdToNumber);
  if (isError) <Error404 />;
  if (historyDetailInfo) {
    const { question, time, mine, peer, keyword } = historyDetailInfo;

    return (
      <>
        <PeerNaHeader />
        <St.LearningDetailSection>
          <BackPageNav backTitle="메인으로" isAbsolute={true} />
          <div>
            <LearningBtnList isActive={true} />
            <QuestionTitle question={question} isAnswer={true} keywordList={keyword} />
            <p className="question_time">{time}</p>
            <St.UserInputBoxWrapper>
              <UserInputBox isModify={false} content={mine.answer} userName={mine.name} imageUrl={mine.imageUrl} />
              <UserInputBox isModify={false} content={peer.answer} userName={peer.name} imageUrl={peer.imageUrl} />
            </St.UserInputBoxWrapper>
          </div>
        </St.LearningDetailSection>
      </>
    );
  }
  return null;
};

export default LearningDetailPage;
const St = {
  LearningDetailSection: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    > div {
      width: 70%;
    }

    .question_time {
      padding: 1.3rem;

      ${({ theme }) => theme.fonts.Peer_Noto_R_SubTitle_1};
      text-align: end;
    }
  `,
  UserInputBoxWrapper: styled.section`
    display: grid;
    justify-content: center;
    align-items: center;

    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
  `,
};
