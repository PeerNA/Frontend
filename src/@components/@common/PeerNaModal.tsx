import React from 'react';
import styled from 'styled-components';
import useModal from '../../lib/hooks/useModal';
import PeerNaBtn from './PeerNaBtn';

interface PeerNaModalProps {
  modalContent: string;
}
const PeerNaModal = (props: PeerNaModalProps) => {
  const { modalContent } = props;

  const { toggleModal } = useModal();
  const handleModalConfirm = () => {
    toggleModal(false);
  };

  return (
    <St.ModalWrapper>
      <St.ModalSection>
        <p>{modalContent}</p>
        <St.ButtonWrapper>
          <PeerNaBtn content="확인" isActive={true} handleBtnClick={handleModalConfirm} />
          <PeerNaBtn content="취소" isActive={false} handleBtnClick={handleModalConfirm} />
        </St.ButtonWrapper>
      </St.ModalSection>
    </St.ModalWrapper>
  );
};

export default PeerNaModal;

const St = {
  ModalWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    width: 100%;
    height: 100%;
    padding: 0rem 6rem;

    background: rgba(0, 0, 0, 0.7);

    z-index: 10000;
  `,

  ModalSection: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    max-width: 60rem;
    padding: 3rem;

    border-radius: 1rem;
    border: 0.5rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_2};
    background-color: ${({ theme }) => theme.colors.Peer_Color_White_2};

    & > p {
      padding: 2rem;
      text-align: center;
      ${({ theme }) => theme.fonts.Peer_Noto_B_Title_3};
    }
  `,

  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.3rem;

    width: 100%;
  `,
};
