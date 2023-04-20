import styled from 'styled-components';

export const St = {
  LearningDetailSection: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    > div {
      width: 70%;
    }

    .question_time {
      padding: 1.3rem;

      ${({ theme }) => theme.fonts.Peer_Noto_R_SubTitle_1};
      text-align: end;
    }
  `,
  UserInputBoxWrapper: styled.section`
    display: grid;
    justify-content: center;
    align-items: center;

    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
  `,
};
