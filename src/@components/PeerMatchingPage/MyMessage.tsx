import React from 'react';
import styled from 'styled-components';
import { MessageInfo } from '../../type/message';

const MyMessage = (props: MessageInfo) => {
  const { message, writer } = props;
  return <St.MessageWrapper className="my_message">{message}</St.MessageWrapper>;
};

export default MyMessage;

const St = {
  MessageWrapper: styled.div`
    /* width: 50%; */
    padding: 1rem;

    ${({ theme }) => theme.fonts.Peer_Noto_R_Content_3};
    border: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_2};
  `,
};
