import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../../../lib/api/auth';

const Callback = () => {
  const code = new URL(window.location.href).searchParams.get('login');
  const navigate = useNavigate();

  useEffect(() => {
    checkLogin();
  }, []);
  console.log(code);

  const checkLogin = async () => {
    if (code === 'success') {
      // const data = await getUserInfo();
      navigate('/main');
    } else navigate('/');
  };
  return null;
};

export default Callback;
