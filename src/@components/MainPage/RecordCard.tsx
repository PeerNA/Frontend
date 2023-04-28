import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { problemInfoState } from '../../recoil/atom/problemInfo';

interface RecordCardProps {
  historyId: number;
  problemId: number;
  question: string;
  time: string;
}

const RecordCard = (props: RecordCardProps) => {
  const { historyId, problemId, question, time } = props;

  const setProblemInfo = useSetRecoilState(problemInfoState);
  const naviagate = useNavigate();

  const handleHistoryDetail = () => {
    setProblemInfo({ problemId, question });
    naviagate(`/detail/${historyId}`);
  };

  return (
    <St.RecordCardWrapper onClick={handleHistoryDetail}>
      <p>{question}</p>
      <St.RecordDateWrapper>{time}</St.RecordDateWrapper>
    </St.RecordCardWrapper>
  );
};

export default RecordCard;

const St = {
  RecordCardWrapper: styled.article`
    display: flex;
    flex-direction: column;

    width: 100%;
    border: 0.1rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_2};

    & > p {
      white-space: nowrap;
      overflow: hidden;
      padding: 4rem 2rem;

      ${({ theme }) => theme.fonts.Peer_Noto_M_Title_1};
      background-color: ${({ theme }) => theme.colors.Peer_Color_Sky_2};

      text-align: center;
      text-overflow: ellipsis;
    }

    &:hover {
      cursor: pointer;

      & > p {
        color: ${({ theme }) => theme.colors.Peer_Color_White_2};
        background-color: ${({ theme }) => theme.colors.Peer_Color_Blue};
      }
      & > div {
        color: ${({ theme }) => theme.colors.Peer_Color_White_2};
        background-color: ${({ theme }) => theme.colors.Peer_Color_Sky_1};
      }
    }
  `,
  RecordDateWrapper: styled.div`
    display: flex;
    justify-content: flex-end;

    padding: 1rem;
    ${({ theme }) => theme.fonts.Peer_Noto_R_SubTitle_1};
    background-color: ${({ theme }) => theme.colors.Peer_Color_White_1};
  `,
};
