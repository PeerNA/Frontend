import { useLocation, useParams } from 'react-router-dom';
import useGetLearningDetail from '../lib/hooks/useGetLearningDetail';
import styled from 'styled-components';

import { ProblemAnswerInfo } from '../type/history';
import { useRecoilValue } from 'recoil';
import { BackPageNav, Error404, LearningHeader, PeerNaHeader } from '../@components/@common';
import { AnswerCard, DetailModal } from '../@components/AnswerListPage';

const DATA: ProblemAnswerInfo[] = [
  {
    replyId: 1,
    userId: 1,
    name: '글랜',
    imageUrl: 'https://lh3.googleusercontent.com/a/AGNmyxYSSoxhmkGGSBLZzKOEf0wZtqR8aXix4lXS_jHM4g=s96-c',
    answer:
      'OS 데드락이란 두 개 이상의 프로세스나 스레드가 서로 자원을 얻지 못해서 다음 처리를 하지 못하는 상태이다.OS 데드락이란 두 개 이상의 프로세스나 스레드가 서로 자원을 얻지 못해서 다음 처리를 하지 못하는 상태이다.OS 데드락이란 두 개 이상의 프로세스나 스레드가 서로 자원을 얻지 못해서 다음 처리를 하지 못하는 상태이다. ',
  },
  {
    replyId: 2,
    userId: 1,
    name: '글랜',
    imageUrl: 'https://lh3.googleusercontent.com/a/AGNmyxYSSoxhmkGGSBLZzKOEf0wZtqR8aXix4lXS_jHM4g=s96-c',
    answer: 'question2',
  },
  {
    replyId: 3,
    userId: 1,
    name: '글랜',
    imageUrl: 'https://lh3.googleusercontent.com/a/AGNmyxYSSoxhmkGGSBLZzKOEf0wZtqR8aXix4lXS_jHM4g=s96-c',
    answer: 'question2',
  },
  {
    replyId: 4,
    userId: 1,
    name: '글랜',
    imageUrl: 'https://lh3.googleusercontent.com/a/AGNmyxYSSoxhmkGGSBLZzKOEf0wZtqR8aXix4lXS_jHM4g=s96-c',
    answer: 'question2',
  },
  {
    replyId: 5,
    userId: 1,
    name: '글랜',
    imageUrl: 'https://lh3.googleusercontent.com/a/AGNmyxYSSoxhmkGGSBLZzKOEf0wZtqR8aXix4lXS_jHM4g=s96-c',
    answer: 'question2',
  },
  {
    replyId: 6,
    userId: 1,
    name: '글랜',
    imageUrl: 'https://lh3.googleusercontent.com/a/AGNmyxYSSoxhmkGGSBLZzKOEf0wZtqR8aXix4lXS_jHM4g=s96-c',
    answer: 'question2',
  },
  {
    replyId: 7,
    userId: 1,
    name: '글랜',
    imageUrl: 'https://lh3.googleusercontent.com/a/AGNmyxYSSoxhmkGGSBLZzKOEf0wZtqR8aXix4lXS_jHM4g=s96-c',
    answer: 'question2',
  },
];
const AnswerListPage = () => {
  const { problemId } = useParams<{ problemId: string }>();
  const historyIdToNumber = Number(problemId) as number;

  // const { historyDetailInfo, isLoading, isError } = useGetLearningDetail(historyIdToNumber);
  // if (isError) <Error404 />;

  return (
    <>
      <PeerNaHeader />
      <St.AnswerListWrapper>
        <BackPageNav backTitle="돌아가기" isAbsolute={false} />
        <LearningHeader title="OS의 데드락에 대해 설명해주세요" pageType="answerList" />
        {DATA.map(({ replyId, userId, name, imageUrl, answer }, idx) => (
          <AnswerCard key={`${name}-${idx}`} replyId={replyId} userId={userId} name={name} imageUrl={imageUrl} answer={answer} />
        ))}
      </St.AnswerListWrapper>
      {false && <DetailModal />}
    </>
  );
};

export default AnswerListPage;
const St = {
  AnswerListWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    gap: 1.7rem;

    width: 100%;
    padding: 2.9rem 2.6rem;
  `,
  UserInputBoxWrapper: styled.section`
    display: grid;
    justify-content: center;
    align-items: center;

    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
  `,
};
