import styled from 'styled-components';

export const St = {
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
