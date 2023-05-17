import styled, { css } from 'styled-components';
import { isImgMessage } from '../../lib/utils/problemInfo';

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
      <St.Profile className={isMyMessage ? 'my_profile' : 'peer_profile'}>{name} 님</St.Profile>
      {isMyMessage ? (
        <St.MessagePargraph>{isImgMessage(message) ? <St.ImgMessage src={message} /> : message}</St.MessagePargraph>
      ) : (
        <PeerMessage>{isImgMessage(message) ? <St.ImgMessage src={message} /> : message}</PeerMessage>
      )}
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

    .my_profile {
      justify-content: flex-end;
    }
  `,
  Profile: styled.div`
    display: flex;
    width: 100%;
    padding: 0 1rem;
    ${({ theme }) => theme.fonts.Peer_Noto_R_Content_4};
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
  ImgMessage: styled.img`
    width: -webkit-fill-available;
    object-fit: contain;
  `,
};
const PeerMessage = styled(St.MessagePargraph)`
  border: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Mint_1};
`;
