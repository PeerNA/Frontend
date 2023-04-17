import { St } from './style';
import LearningSelect from './LearningSelect';
import { SELET_TITLE_LIST } from '../../../constants/mainPageInfo';

const LearningExperience = () => {
  return (
    <St.LearningExperienceSection>
      {SELET_TITLE_LIST.map((title, idx) => (
        <LearningSelect key={title} isSubject={Boolean(idx)} title={title} />
      ))}
    </St.LearningExperienceSection>
  );
};

export default LearningExperience;
