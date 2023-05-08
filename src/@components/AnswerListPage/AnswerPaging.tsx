import { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { AnswerCard, Paging } from '.';
import useGetAnswerList from '../../lib/hooks/useGetAnswerList';
import { problemInfoState } from '../../recoil/atom/problemInfo';
import { Error404 } from '../@common';

const AnswerPaging = () => {
  const { problemId } = useRecoilValue(problemInfoState);
  const [size, setSize] = useState(0);
  const { problemAnswerInfo, isLoading, isError } = useGetAnswerList(problemId, size);

  const handleClickPage = (newSize: number) => {
    setSize(newSize - 1);
  };

  if (problemAnswerInfo) {
    const { replyData, totalCount } = problemAnswerInfo;

    return (
      <>
        {replyData.map(({ replyId, userId, name, imageUrl, answer }, idx) => (
          <AnswerCard key={`${name}-${idx}`} replyId={replyId} userId={userId} name={name} imageUrl={imageUrl} answer={answer} />
        ))}
        <Paging totalItemsCount={totalCount} activePage={size} handleClickPage={handleClickPage} />
      </>
    );
  }
  return <Error404 />;
};

export default AnswerPaging;
