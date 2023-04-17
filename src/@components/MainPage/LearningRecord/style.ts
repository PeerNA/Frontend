import styled from 'styled-components';

export const St = {
  LearningRecordSection: styled.section`
    display: flex;
    flex-wrap: wrap;
    column-gap: 5%;
    row-gap: 2rem;

    width: 100%;

    margin: 2rem;

    & > div {
      width: 45%;
    }
  `,
};
