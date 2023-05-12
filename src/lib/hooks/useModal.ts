import { useRecoilState, useResetRecoilState } from 'recoil';
import { useCallback } from 'react';
import { modalInfoState } from '../../recoil/atom/profileBar';

const useModal = () => {
  const [modalInfo, setModalInfo] = useRecoilState(modalInfoState);
  const { isPeernaModal, isProfileModal, isPeerMatchModal } = modalInfo;

  const toggleModal = (isProfileType: boolean, isSuccess?: boolean) => {
    if (isProfileType) setModalInfo({ isPeernaModal, isProfileModal: !isProfileModal, isPeerMatchModal });
    else setModalInfo({ isPeernaModal: isSuccess ? false : !isPeernaModal, isProfileModal, isPeerMatchModal });
  };

  const togglePeerMatchModal = () => {
    setModalInfo({ isPeerMatchModal: !isPeerMatchModal, isPeernaModal, isProfileModal });
  };
  return { isPeernaModal, isProfileModal, isPeerMatchModal, toggleModal, togglePeerMatchModal };
};

export default useModal;
