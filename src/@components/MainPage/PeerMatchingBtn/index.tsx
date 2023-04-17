import { useRecoilValue } from 'recoil';
import { postMatchingInterest } from '../../../lib/api/auth';
import { St } from './style';
import { userInfoState } from '../../../recoil/atom/userInfo';

const PeerMatchingBtn = () => {
  const userInterestInfo = useRecoilValue(userInfoState);
  const { career, priorityList } = userInterestInfo;
  const handleMatchingBtn = async () => {
    try {
      const data = await postMatchingInterest({ ...priorityList, career });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <St.MatchigBtnWrapper onClick={handleMatchingBtn}>
      <St.MatchingBtn>동료 매칭 시작</St.MatchingBtn>
      <span className="material-symbols-outlined">arrow_right</span>
    </St.MatchigBtnWrapper>
  );
};

export default PeerMatchingBtn;
