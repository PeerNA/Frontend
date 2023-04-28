import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { BackPageNav, LearningHeader, PeerNaHeader } from '../@components/@common';
import { AnswerPaging, DetailModal } from '../@components/AnswerListPage';
import { problemInfoState } from '../recoil/atom/problemInfo';

const AnswerListPage = () => {
  const { question } = useRecoilValue(problemInfoState);
  return (
    <>
      <PeerNaHeader />
      <St.AnswerListWrapper>
        <BackPageNav backTitle="돌아가기" isAbsolute={false} />
        <LearningHeader title={question} pageType="answerList" />
        <AnswerPaging />
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
