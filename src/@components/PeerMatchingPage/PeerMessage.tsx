import React from 'react';
import styled from 'styled-components';
import { MessageInfo } from '../../type/message';

const PeerMessage = (props: MessageInfo) => {
  const { message, writer } = props;
  return <St.MessageWrapper>{message}</St.MessageWrapper>;
};

export default PeerMessage;

const St = {
  MessageWrapper: styled.div`
    width: 50%;
    padding: 1rem;

    ${({ theme }) => theme.fonts.Peer_Noto_R_Content_3};
    border: 0.2rem solid ${({ theme }) => theme.colors.Pic_Color_Mint_1};
    border-radius: 1rem;
  `,
};
