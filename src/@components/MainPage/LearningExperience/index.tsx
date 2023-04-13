import { St } from './style';
import SubjectSelect from './SubjectSelect';

const LearningExperience = () => {
  return (
    <St.LearningExperienceSectionr>
      <SubjectSelect priority={1} />
      <SubjectSelect priority={2} />
      <SubjectSelect priority={3} />
    </St.LearningExperienceSectionr>
  );
};

export default LearningExperience;
