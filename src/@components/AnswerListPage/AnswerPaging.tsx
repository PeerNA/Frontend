import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { AnswerCard, Paging } from '.';
import useGetAnswerList from '../../lib/hooks/useGetAnswerList';
import { problemInfoState } from '../../recoil/atom/problemInfo';
import { Error404 } from '../@common';

interface AnswerPagingProps {
  handleScrollToTop: () => void;
}
const AnswerPaging = (props: AnswerPagingProps) => {
  const { handleScrollToTop } = props;
  const scrollRef = useRef<HTMLDivElement>(null);

  const { problemId } = useRecoilValue(problemInfoState);
  const { problemAnswerInfo, isLoading, isError, setSize, size } = useGetAnswerList(problemId);

  const handleClickPage = (newSize: number) => {
    handleScrollToTop();
    setSize(newSize);
  };

  if (problemAnswerInfo) {
    const { replyData, totalCount } = problemAnswerInfo;
    return (
      <St.AnswerPagingWrapper ref={scrollRef}>
        {replyData.map(({ replyId, userId, name, imageUrl, answer }, idx) => (
          <AnswerCard key={`${name}-${idx}`} replyId={replyId} userId={userId} name={name} imageUrl={imageUrl} answer={answer} />
        ))}
        <Paging totalItemsCount={totalCount} activePage={size} handleClickPage={handleClickPage} />
      </St.AnswerPagingWrapper>
    );
  }
  return <Error404 />;
};

export default AnswerPaging;

const St = {
  AnswerPagingWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  `,
};
