import { useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useGetLearningHistoryList from '../../../lib/hooks/useGetLearningHistory';

import { GetLearningHistoryInfo } from '../../../type/history';
import RecordCard from './RecordCard';
import { St } from './style';

const MOCK_RECORD_DATA: GetLearningHistoryInfo[] = [
  {
    historyId: 2,
    problemId: 2,
    question: 'question2',
    category: 'OS',
    time: '2023-04-17',
  },
  {
    historyId: 2,
    problemId: 2,
    question: 'question2',
    category: 'OS',
    time: '2023-04-17',
  },
  {
    historyId: 1,
    problemId: 1,
    question: 'question1',
    category: 'OS',
    time: '2023-04-17',
  },
  {
    historyId: 1,
    problemId: 1,
    question: 'question1',
    category: 'OS',
    time: '2023-04-17',
  },
  {
    historyId: 2,
    problemId: 2,
    question: 'question2',
    category: 'OS',
    time: '2023-04-17',
  },
  {
    historyId: 2,
    problemId: 2,
    question: 'question2',
    category: 'OS',
    time: '2023-04-17',
  },
  {
    historyId: 1,
    problemId: 1,
    question: 'question1',
    category: 'OS',
    time: '2023-04-17',
  },
  {
    historyId: 1,
    problemId: 1,
    question: 'question1',
    category: 'OS',
    time: '2023-04-17',
  },
];

const LearningRecord = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { historyCardList, isLoading, isError, size, setSize } = useGetLearningHistoryList();

  const getMoreItem = useCallback(() => {
    if (historyCardList) {
      setSize((prev) => prev + 1);
    }
  }, [historyCardList, setSize]);

  useEffect(() => {
    if (inView && historyCardList) {
      getMoreItem();
    }
  }, [inView]);

  return (
    <St.LearningRecordSection>
      {MOCK_RECORD_DATA.map(({ historyId, question, time }, idx) => (
        <div key={`${time}+${idx}`} ref={ref}>
          <RecordCard historyId={historyId} question={question} time={time} />
        </div>
      ))}
    </St.LearningRecordSection>
  );
};

export default LearningRecord;
