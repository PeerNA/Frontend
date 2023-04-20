import LearningHeader from '../@common/LearningHeader';
import PeerNaHeader from '../@common/PeerNaHeader';
import LearningExperience from './LearningExperience';
import LearningRecord from './LearningRecord';
import PeerMatchingBtn from './PeerMatchingBtn';
import { St } from './style';

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
