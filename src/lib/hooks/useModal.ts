import { useRecoilState, useResetRecoilState } from 'recoil';
import { modalInfoState } from '../../recoil/atom/profileBar';

const useModal = () => {
  const [modalInfo, setModalInfo] = useRecoilState(modalInfoState);
  const { isAutoModal, isPeernaModal, isProfileModal, isPeerMatchModal, isNotificationModal, isProblemExitModal } = modalInfo;

  const toggleModal = (isProfileType: boolean, isSuccess?: boolean) => {
    if (isProfileType) setModalInfo({ ...modalInfo, isProfileModal: !isProfileModal });
    else setModalInfo({ ...modalInfo, isPeernaModal: isSuccess ? false : !isPeernaModal });
  };
  const toggleNotificationModal = () => {
    setModalInfo({ ...modalInfo, isNotificationModal: !isNotificationModal });
  };
  const togglePeerMatchModal = () => {
    setModalInfo({ ...modalInfo, isPeerMatchModal: !isPeerMatchModal });
  };

  const toggleProblemExitModal = () => {
    setModalInfo({ ...modalInfo, isProblemExitModal: !isProblemExitModal });
  };
  const toggleAutoModal = () => {
    setModalInfo({ ...modalInfo, isPeerMatchModal: false, isAutoModal: !isAutoModal });
  };

  return {
    isAutoModal,
    isPeernaModal,
    isProfileModal,
    isPeerMatchModal,
    isProblemExitModal,
    isNotificationModal,
    toggleNotificationModal,
    toggleAutoModal,
    toggleModal,
    togglePeerMatchModal,
    toggleProblemExitModal,
  };
};

export default useModal;
