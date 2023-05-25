import React from 'react';
import styled from 'styled-components';

const LockSolving = () => {
  return (
    <St.LockSolving>
      <span className="material-symbols-outlined">lock</span>
    </St.LockSolving>
  );
};

export default LockSolving;

const St = {
  LockSolving: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 35rem;

    border: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Blue};

    > span {
      font-size: 10rem;
      color: ${({ theme }) => theme.colors.Peer_Color_Sky_1};
    }
  `,
};
