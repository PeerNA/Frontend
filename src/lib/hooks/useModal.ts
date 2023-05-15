import { useRecoilState, useResetRecoilState } from 'recoil';
import { modalInfoState } from '../../recoil/atom/profileBar';

const useModal = () => {
  const [modalInfo, setModalInfo] = useRecoilState(modalInfoState);
  const { isPeernaModal, isProfileModal, isPeerMatchModal, isProblemExitModal } = modalInfo;

  const toggleModal = (isProfileType: boolean, isSuccess?: boolean) => {
    if (isProfileType) setModalInfo({ ...modalInfo, isProfileModal: !isProfileModal });
    else setModalInfo({ ...modalInfo, isPeernaModal: isSuccess ? false : !isPeernaModal });
  };

  const togglePeerMatchModal = () => {
    setModalInfo({ ...modalInfo, isPeerMatchModal: !isPeerMatchModal, isPeernaModal, isProfileModal });
  };

  const toggleProblemExitModal = () => {
    setModalInfo({ ...modalInfo, isProblemExitModal: !isProblemExitModal });
  };
  return { isPeernaModal, isProfileModal, isPeerMatchModal, isProblemExitModal, toggleModal, togglePeerMatchModal, toggleProblemExitModal };
};

export default useModal;
