import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IcBack } from '../../../assets/icon';
import { St } from './style';

interface BackPageNavProps {
  backTitle: string;
  isAbsolute: boolean;
}
const BackPageNav = (props: BackPageNavProps) => {
  const { backTitle, isAbsolute } = props;

  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate(-1);
  };

  return (
    <St.BackPageNav onClick={handleBackPage} isAbsolute={isAbsolute}>
      <IcBack />
      <St.BackTitle>{backTitle}</St.BackTitle>
    </St.BackPageNav>
  );
};

export default BackPageNav;
