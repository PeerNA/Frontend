import styled from 'styled-components';
import { PeerNaHeader } from '../@components/@common';
import { ChatingRoom, ProblemSolving } from '../@components/PeerMatchingPage';

const PeerMatching = () => {
  return (
    <>
      <PeerNaHeader />
      <St.PeerMatchingWrapper>
        <ProblemSolving />
        <ChatingRoom />
      </St.PeerMatchingWrapper>
    </>
  );
};

export default PeerMatching;

const St = {
  PeerMatchingWrapper: styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 1rem 2rem;
  `,
};
