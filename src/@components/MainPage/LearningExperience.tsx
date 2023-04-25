import styled from 'styled-components';
import { LearningSelect } from '.';

import { SELET_TITLE_LIST } from '../../constants/mainPageInfo';

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

const St = {
  LearningExperienceSection: styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 5.5rem;

    width: 100%;
    margin-bottom: 5.4rem;
  `,
};
