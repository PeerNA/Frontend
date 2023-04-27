import { useRecoilValue } from 'recoil';
import { patchMatchingInterest } from '../../lib/api/auth';
import styled from 'styled-components';

import { userInfoState } from '../../recoil/atom/userInfo';
import useModal from '../../lib/hooks/useModal';
import { PeerNaModal } from '../@common';
import ModalPortal from '../../ModalPortals';

const PeerMatchingBtn = () => {
  const userInterestInfo = useRecoilValue(userInfoState);
  const { career, interest } = userInterestInfo;
  const { isPeernaModal, toggleModal } = useModal();

  const handleMatchingBtn = async () => {
    try {
      // const data = await postMatchingInterest({ ...interest, career });
      // console.log(data);
      toggleModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <St.MatchigBtnWrapper onClick={handleMatchingBtn}>
        <St.MatchingBtn>동료 매칭 시작</St.MatchingBtn>
        <span className="material-symbols-outlined">arrow_right</span>
      </St.MatchigBtnWrapper>
      {isPeernaModal && (
        <ModalPortal>
          <PeerNaModal />
        </ModalPortal>
      )}
    </>
  );
};

export default PeerMatchingBtn;

const St = {
  MatchigBtnWrapper: styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
    height: 7.2rem;
    padding: 1.9rem 3.6rem;

    background-color: ${({ theme }) => theme.colors.Peer_Color_Blue};
    border-radius: 3rem;

    & > span {
      font-size: 5rem;
      color: ${({ theme }) => theme.colors.Peer_Color_White_2};
    }
  `,
  MatchingBtn: styled.button`
    ${({ theme }) => theme.fonts.Peer_Noto_B_Title_2}
    background: none;
    border: none;
  `,
};
