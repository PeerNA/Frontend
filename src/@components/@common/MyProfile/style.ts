import styled from 'styled-components';

export const St = {
  MyProfileSection: styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;

    position: relative;

    & > img {
      width: 5.9rem;
      height: 5.9rem;

      border-radius: 3rem;
    }
  `,
  ProfileName: styled.p`
    ${({ theme }) => theme.fonts.Peer_Noto_B_Content_1};
    cursor: pointer;
  `,
  MyProfileArticle: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 10rem;
    right: ${0.003 * window.screen.width}rem;

    width: ${0.03 * window.screen.width}rem;
    padding: 0 2.2rem;

    background-color: ${({ theme }) => theme.colors.Peer_Color_White_2};
    border: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_1};
    border-radius: 3rem;

    & > img {
      width: 11rem;
      margin: 1.7rem 0;

      border-radius: 30rem;
    }

    & > p {
      margin-bottom: 1rem;

      ${({ theme }) => theme.fonts.Peer_Noto_B_Title_2};
    }
  `,
  ProfileTitle: styled.header`
    display: flex;
    justify-content: center;

    width: 100%;

    & > h1 {
      margin: 1.7rem 0;

      ${({ theme }) => theme.fonts.Peer_Noto_B_Title_2};
    }
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_1};
  `,
  ProfileModalList: styled.ul`
    width: 100%;

    list-style: none;
    & > li {
      display: flex;
      justify-content: center;

      width: 100%;
      margin: 3rem 0rem;

      ${({ theme }) => theme.fonts.Peer_Noto_M_SubTitle_1}
      color : ${({ theme }) => theme.colors.Peer_Color_Gray}
    }
    & > li:first-child {
      padding-bottom: 3rem;
      border-bottom: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_1};
    }
  `,
};
