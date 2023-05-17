import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PeerNaBtn } from '../@common';

interface ImgPreviewProps {
  imgFile: File;
  handleSubmitBtn: () => void;
  handleExitBtn: () => void;
}
const ImgPreview = (props: ImgPreviewProps) => {
  const { imgFile, handleExitBtn, handleSubmitBtn } = props;

  const [imgBase64, setImgBase64] = useState<string>('');
  const handleImageChange = () => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    reader.readAsDataURL(imgFile);
  };
  useEffect(() => {
    handleImageChange();
  }, []);
  return (
    <St.ImgPreviewWrapper>
      <St.Img alt="미리보기-이미지" src={imgBase64} />
      <St.BtnList>
        <PeerNaBtn content="전송" isActive={true} handleBtnClick={handleSubmitBtn} />
        <PeerNaBtn content="취소" isActive={true} handleBtnClick={handleExitBtn} />
      </St.BtnList>
    </St.ImgPreviewWrapper>
  );
};

export default ImgPreview;

const St = {
  ImgPreviewWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 1rem;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 70%;
    height: 50%;

    background-color: ${({ theme }) => theme.colors.Peer_Color_Sky_3};
    border-radius: 1rem;
  `,
  Img: styled.img`
    max-width: 27rem;
    object-fit: contain;

    background-color: ${({ theme }) => theme.colors.Peer_Color_White_1};
    border-radius: 1rem;
  `,
  BtnList: styled.div`
    display: flex;
    justify-content: space-evenly;

    width: 100%;
  `,
};
