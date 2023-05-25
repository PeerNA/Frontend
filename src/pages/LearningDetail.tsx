import { useParams } from 'react-router-dom';
import useGetLearningDetail from '../lib/hooks/useGetLearningDetail';
import styled from 'styled-components';

import { BackPageNav, UserInputBox, Error404, PeerNaHeader, LearningBtnList, QuestionTitle } from '../@components/@common';
import { useRecoilValue } from 'recoil';
import { problemInfoState } from '../recoil/atom/problemInfo';
import ChatingMessage from '../@components/PeerMatchingPage/ChatingMessage';

const LearningDetailPage = () => {
  const { historyId } = useParams<{ historyId: string }>();
  const historyIdToNumber = Number(historyId) as number;

  const { historyDetailInfo, isLoading, isError } = useGetLearningDetail(historyIdToNumber);
  if (isError) <Error404 />;
  if (historyDetailInfo) {
    const { question, time, mine, peer, keyword, chat } = historyDetailInfo;

    return (
      <>
        <PeerNaHeader />
        <St.LearningDetailSection>
          <BackPageNav backTitle="메인으로" isAbsolute={true} />
          <div></div>
          <div>
            <LearningBtnList isActive={true} />
            <QuestionTitle question={question} isAnswer={true} keywordList={keyword} />
            <p className="question_time">{time}</p>
            <St.UserInputBoxWrapper>
              <UserInputBox isModify={false} isPeerAnswer={true} content={mine.answer} userName={mine.name} imageUrl={mine.imageUrl} />
              <UserInputBox isModify={false} isPeerAnswer={true} content={peer.answer} userName={peer.name} imageUrl={peer.imageUrl} />
            </St.UserInputBoxWrapper>
          </div>
          <St.List>
            <h3>채팅기록</h3>
            {chat.map(({ message, time, writerId }, idx) => (
              <ChatingMessage
                key={`${writerId}-${idx}`}
                message={message}
                time={time}
                name={writerId === mine.userId ? mine.name : peer.name}
                isMyMessage={writerId === mine.userId}
              />
            ))}
          </St.List>
        </St.LearningDetailSection>
      </>
    );
  }
  return null;
};

export default LearningDetailPage;
const St = {
  LearningDetailSection: styled.section`
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr;
    justify-content: center;

    padding-right: 1rem;
    gap: 2rem;
    position: relative;

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
  List: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    width: 100%;
    height: 100%;
    margin-top: 2rem;
    padding: 1rem;

    border: 1rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_2};
    border-radius: 1rem;
    overflow-y: scroll;

    .my_message {
      margin-left: 50%;
    }
    .peer_message {
      margin-right: 50%;
    }
    > h3 {
      padding: 1rem;
      ${({ theme }) => theme.fonts.Peer_Noto_M_SubTitle_1};
      border-bottom: 0.4rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_3};
    }
  `,
};
