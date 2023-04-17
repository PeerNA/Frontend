import { useNavigate } from 'react-router-dom';
import { St } from './style';

interface RecordCardProps {
  historyId: number;
  question: string;
  time: string;
}
const RecordCard = (props: RecordCardProps) => {
  const { historyId, question, time } = props;
  const naviagate = useNavigate();

  const handleHistoryDetail = async () => {
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
