import { IcStudying } from '../../../../assets/icon';
import { St } from './style';

const Header = () => {
  return (
    <St.HeaderWrapper>
      <IcStudying />
      <h2>학습 기록</h2>
    </St.HeaderWrapper>
  );
};

export default Header;
