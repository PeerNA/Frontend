import React from 'react';
import styled from 'styled-components';
import useModal from '../../lib/hooks/useModal';

const PeerNaModal = () => {
  const { toggleModal } = useModal();
  return (
    <>
      <St.ModalWrapper>
        <St.ModalSection>
          <p>🥳🥳🥳 축하합니다!! 🥳🥳🥳</p>
          <St.ButtonWrapper>
            <button type="button" onClick={toggleModal}>
              게임으로 돌아가기
            </button>
          </St.ButtonWrapper>
        </St.ModalSection>
      </St.ModalWrapper>
    </>
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
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    width: fit-content;
    padding: 4rem;

    border-radius: 1rem;
  `,

  ButtonWrapper: styled.div`
    display: flex;
    gap: 1.2rem;
    padding-top: 4rem;
    width: 100%;

    > button {
      width: 100%;
      padding: 2rem;

      border: none;
      border-radius: 1rem;
    }
  `,
};
