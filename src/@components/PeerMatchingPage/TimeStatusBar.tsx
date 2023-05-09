import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import useModal from '../../lib/hooks/useModal';
import { calculateTime } from '../../recoil/selector/problemInfo';

const TimeStatusBar = () => {
  const { isPeernaModal } = useModal();
  const maxTime = useRecoilValue(calculateTime);
  const [time, setTime] = useState(maxTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time) setTime((prev) => prev - 1);
    }, 1000);

    if (isPeernaModal) clearInterval(timer);

    return () => clearInterval(timer);
  }, [isPeernaModal]);

  return (
    <St.Progress>
      <St.Dealt dealt={(time / maxTime) * 100} />
    </St.Progress>
  );
};

export default TimeStatusBar;

const St = {
  Progress: styled.div`
    width: 100%;
    height: 2rem;

    background-color: ${({ theme }) => theme.colors.Peer_Color_Sky_3};
    border-radius: 10rem;
  `,
  Dealt: styled.div<{ dealt: number }>`
    width: ${({ dealt }) => dealt + '%'};
    height: 100%;

    background-color: ${({ theme }) => theme.colors.Pic_Color_Mint_1};
    border-radius: 10rem;
  `,
};
