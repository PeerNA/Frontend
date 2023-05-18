import styled from 'styled-components';
import { PeerNaHeader } from '../@components/@common';
import { ChatingRoom, PeerMatchingExitBtn, ProblemSolving } from '../@components/PeerMatchingPage';

const PeerMatching = () => {
  return (
    <>
      <PeerNaHeader />
      <St.PeerMatchingWrapper>
        <ProblemSolving />
        <ChatingRoom />
      </St.PeerMatchingWrapper>
      <PeerMatchingExitBtn />
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
