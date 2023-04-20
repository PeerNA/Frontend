import { useNavigate } from 'react-router-dom';
import { IcBack } from '../../../assets/icon';
import { St } from './style';

interface BackPageNavProps {
  backTitle: string;
  backPageURL: string;
}
const BackPageNav = (props: BackPageNavProps) => {
  const { backTitle, backPageURL } = props;

  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate(backPageURL);
  };

  return (
    <St.BackPageNav onClick={handleBackPage}>
      <IcBack />
      <St.BackTitle>{backTitle}</St.BackTitle>
    </St.BackPageNav>
  );
};

export default BackPageNav;
