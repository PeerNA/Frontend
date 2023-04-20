import styled from 'styled-components';

export const St = {
  QuestionHeader: styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;

    padding: 1.5rem 0.9rem;

    background-color: ${({ theme }) => theme.colors.Peer_Color_Sky_3};
  `,
  Title: styled.h1`
    ${({ theme }) => theme.fonts.Peer_Noto_B_Title_1};
  `,
};
