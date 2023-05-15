import styled, { css } from 'styled-components';

interface ChatingMessageProps {
  message: string;
  name: string;
  time: string;
  isMyMessage: boolean;
}
const ChatingMessage = (props: ChatingMessageProps) => {
  const { message, name, time, isMyMessage } = props;
  return (
    <St.MessageWrapper className={isMyMessage ? 'my_message' : 'peer_message'}>
      {isMyMessage ? <St.MessagePargraph>{message}</St.MessagePargraph> : <PeerMessage>{message}</PeerMessage>}
      <St.TimePargraph>{time.slice(0, 8)}</St.TimePargraph>
    </St.MessageWrapper>
  );
};

export default ChatingMessage;

const St = {
  MessageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  `,
  MessagePargraph: styled.div`
    padding: 1rem;

    ${({ theme }) => theme.fonts.Peer_Noto_R_Content_3};

    border: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_2};

    border-radius: 1rem;
  `,
  TimePargraph: styled.div`
    padding: 0 1rem;

    ${({ theme }) => theme.fonts.Peer_Noto_R_Content_4};
  `,
};
const PeerMessage = styled(St.MessagePargraph)`
  border: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Mint_1};
`;
