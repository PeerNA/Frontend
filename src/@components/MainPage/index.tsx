import PeerNaHeader from '../@common/PeerNaHeader';
import LearningExperience from './LearningExperience';
import Header from './LearningExperience/Header';
import PeerMatchingBtn from './PeerMatchingBtn';
import { St } from './style';

const MainPage = () => {
  return (
    <St.MainWrapper>
      <PeerNaHeader />
      <section>
        <Header />
        <LearningExperience />
        <PeerMatchingBtn />
      </section>
    </St.MainWrapper>
  );
};

export default MainPage;
