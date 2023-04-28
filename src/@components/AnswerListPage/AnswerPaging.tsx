import { useRecoilValue } from 'recoil';
import { AnswerCard, Paging } from '.';
import useGetAnswerList from '../../lib/hooks/useGetAnswerList';
import { problemInfoState } from '../../recoil/atom/problemInfo';
import { Error404 } from '../@common';

const AnswerPaging = () => {
  const { problemId } = useRecoilValue(problemInfoState);
  const { answerList, isLoading, isError, size, setSize } = useGetAnswerList(problemId);

  const handleClickPage = (newSize: number) => {
    setSize(newSize);
  };

  if (answerList) {
    const spliceAnswerList = answerList?.slice((size - 1) * 5, (size - 1) * 5 + 5);
    return (
      <>
        {spliceAnswerList.map(({ replyId, userId, name, imageUrl, answer }, idx) => (
          <AnswerCard key={`${name}-${idx}`} replyId={replyId} userId={userId} name={name} imageUrl={imageUrl} answer={answer} />
        ))}
        <Paging totalItemsCount={answerList.length} activePage={size} handleClickPage={handleClickPage} />
      </>
    );
  }
  return <Error404 />;
};

export default AnswerPaging;
