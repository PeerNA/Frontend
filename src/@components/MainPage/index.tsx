import PeerNaHeader from '../@common/PeerNaHeader';
import LearningExperience from './LearningExperience';
import LearningRecord from './LearningRecord';
import Header from './LearningRecord/Header';
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
          <Header />
          <LearningRecord />
        </section>
      </St.MainWrapper>
    </>
  );
};

export default MainPage;
