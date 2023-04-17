import styled from 'styled-components';

export const St = {
  SubjectArticleWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 100%;

    h3 {
      margin-bottom: 0.7rem;
      margin-left: 0.5rem;

      ${({ theme }) => theme.fonts.Peer_Noto_B_Title_2}
      color: ${({ theme }) => theme.colors.Peer_Color_Gray};
    }
  `,
  SubjectSelect: styled.select`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 7.6rem;

    cursor: pointer;

    ${({ theme }) => theme.fonts.Peer_Noto_B_Content_1}
    background-color: ${({ theme }) => theme.colors.Pic_Color_Mint_1};
    border: 0.3rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_2};
    border-radius: 10rem;

    appearance: none;

    &:hover {
      color: ${({ theme }) => theme.colors.Pic_Color_Mint_1};
      background-color: ${({ theme }) => theme.colors.Peer_Color_White_1};
    }
  `,
  SubjectOption: styled.option`
    text-align: center;
  `,
};
