import { LearningHeader, PeerNaHeader } from '../@components/@common';
import styled from 'styled-components';
import { LearningExperience, PeerMatchingBtn, LearningRecord } from '../@components/MainPage';

const MainPage = () => {
  return (
    <>
      <PeerNaHeader />

      <St.MainWrapper>
        <section>
          <LearningExperience />
          <PeerMatchingBtn />
        </section>
        <section>
          <LearningHeader title="학습기록" pageType="main" />
          <LearningRecord />
        </section>
      </St.MainWrapper>
    </>
  );
};

export default MainPage;

const St = {
  MainWrapper: styled.div`
    display: flex;

    width: 100%;

    & > section {
      margin: 2%;

      margin-bottom: 4rem;
      &:first-child {
        width: 20%;
      }
      &:last-child {
        width: 80%;
      }
    }
  `,
};
