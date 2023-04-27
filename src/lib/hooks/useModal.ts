import { useRecoilState } from 'recoil';
import { useCallback } from 'react';
import { modalInfoState } from '../../recoil/atom/profileBar';

const useModal = () => {
  const [modalInfo, setModalInfo] = useRecoilState(modalInfoState);
  const { isPeernaModal, isProfileModal } = modalInfo;

  const toggleModal = (isProfileType: boolean) => {
    if (isProfileType) setModalInfo({ isPeernaModal, isProfileModal: !isProfileModal });
    else setModalInfo({ isPeernaModal: !isPeernaModal, isProfileModal });
  };

  return { isPeernaModal, isProfileModal, toggleModal };
};

export default useModal;
