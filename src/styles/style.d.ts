import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      Peer_Color_Gray: string;
      Peer_Color_Red: string;
      Peer_Color_Purple: string;
      Peer_Color_Green: string;
      Peer_Color_Blue: string;
      Peer_Color_Sky_1: string;
      Peer_Color_Sky_2: string;
      Peer_Color_Sky_3: string;
      Pic_Color_Mint_1: string;
      Pic_Color_Mint_2: string;
      Peer_Color_White_1: string;
      Peer_Color_White_2: string;
      Peer_Color_Black: string;
    };
    fonts: {
      Peer_Noto_B_Title_1: SerializedStyles;
      Peer_Noto_B_Title_2: SerializedStyles;
      Peer_Noto_B_Title_3: SerializedStyles;
      Peer_Noto_M_Title_1: SerialzedStyles;
      Peer_Noto_M_SubTitle_1: SerializedStyles;
      Peer_Noto_R_SubTitle_2: SerializedStyles;
      Peer_Noto_B_Content_1: SerializedStyles;
      Peer_Noto_M_Content_2: SerializedStyles;
      Peer_Noto_R_Content_3: SerializedStyles;
    };
  }
}
