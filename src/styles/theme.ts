import { css, DefaultTheme } from 'styled-components';

const colors = {
  Peer_Color_Gray: '#484848',
  Peer_Color_Red: '#FF7B7B',
  Peer_Color_Purple: '#C13DFF',
  Peer_Color_Green: '#A2DBA1',
  Peer_Color_Blue: '#98A8F8',
  Peer_Color_Sky_1: '#8088B2',
  Peer_Color_Sky_2: '#BCCEF8',
  Peer_Color_Sky_3: '#E2E8F6',
  Pic_Color_Mint_1: '#B9E4DF',
  Pic_Color_Mint_2: '#CDFCF6',
  Peer_Color_White_1: '#FAF7F0',
  Peer_Color_White_2: '#FFFFFF',
  Peer_Color_Black: '#000000',
};

const fonts = {
  Peer_Noto_B_Title_1: css`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 4.1rem;
    letter-spacing: -0.05rem;
  `,
  Peer_Noto_B_Title_2: css`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3.6rem;
    letter-spacing: -0.05rem;
  `,
  Peer_Noto_B_Title_3: css`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 2.3rem;
    line-height: 3.3rem;
    letter-spacing: -0.05rem;
  `,
  Peer_Noto_M_Title_1: css`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 3.6rem;
    letter-spacing: -0.05rem;
  `,
  Peer_Noto_M_SubTitle_1: css`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.9rem;
    letter-spacing: -0.05rem;
  `,
  Peer_Noto_R_SubTitle_1: css`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.9rem;
    letter-spacing: -0.05rem;
  `,
  Peer_Noto_R_SubTitle_2: css`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.9rem;
    letter-spacing: -0.05rem;
  `,
  Peer_Noto_B_Content_1: css`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.6rem;
    letter-spacing: -0.05rem;
  `,
  Peer_Noto_M_Content_2: css`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.6rem;
    letter-spacing: -0.05rem;
  `,
  Peer_Noto_R_Content_3: css`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.6rem;
    letter-spacing: -0.05rem;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
