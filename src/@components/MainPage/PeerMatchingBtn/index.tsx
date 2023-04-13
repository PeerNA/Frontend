import { St } from './style';

const PeerMatchingBtn = () => {
  return (
    <St.MatchigBtnWrapper>
      <St.MatchingBtn>동료 매칭 시작</St.MatchingBtn>
      <span className="material-symbols-outlined">arrow_right</span>
    </St.MatchigBtnWrapper>
  );
};

export default PeerMatchingBtn;
