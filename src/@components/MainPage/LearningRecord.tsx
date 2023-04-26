import { useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useGetLearningHistoryList from '../../lib/hooks/useGetLearningHistory';

import styled from 'styled-components';
import { RecordCard } from '.';
import { Error404 } from '../@common';

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

  if (isError) return <Error404 />;

  return (
    <St.LearningRecordSection>
      {historyCardList &&
        historyCardList.map(({ historyId, question, time }, idx) => (
          <div key={`${time}+${idx}`} ref={ref}>
            <RecordCard historyId={historyId} question={question} time={time} />
          </div>
        ))}
    </St.LearningRecordSection>
  );
};

export default LearningRecord;

const St = {
  LearningRecordSection: styled.section`
    display: flex;
    flex-wrap: wrap;
    column-gap: 5%;
    row-gap: 2rem;

    width: 100%;

    margin: 2rem;

    & > div {
      width: 45%;
    }
  `,
};
