import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { getUserInfo } from '../lib/api/auth';
import { userInfoState } from '../recoil/atom/userInfo';

const Callback = () => {
  const code = new URL(window.location.href).searchParams.get('login');
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoState);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    if (code === 'success') {
      const data = await getUserInfo();
      if (data) {
        setUserInfo(data);
        navigate('/main');
      }
    } else navigate('/');
  };
  return null;
};

export default Callback;
