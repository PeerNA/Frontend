import styled from 'styled-components';

export const St = {
  UserInputBoxArticle: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding: 1.5rem;

    border: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Blue};
    input,
    .input_content {
      height: 35rem;

      ${({ theme }) => theme.fonts.Peer_Noto_R_SubTitle_1};
      overflow-y: visible;
    }
  `,
  UserProfileUnderBar: styled.hr`
    width: 100%;

    border: 0.1rem solid ${({ theme }) => theme.colors.Peer_Color_Blue};
  `,
};
