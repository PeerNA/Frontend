import { useState, useEffect, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { activeStateModal } from '../../../recoil/atom/profileBar';

const useModal = () => {
  const setIsActiveModal = useSetRecoilState(activeStateModal);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    console.log('히히');
    setIsModalOpen((prevModalState) => !prevModalState);
  }, []);

  useEffect(() => {
    setIsActiveModal(isModalOpen);
  }, [isModalOpen, setIsActiveModal]);

  return { isModalOpen, toggleModal };
};

export default useModal;
