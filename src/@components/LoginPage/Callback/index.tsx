import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const code = new URL(window.location.href).searchParams.get('login');
  const navigate = useNavigate();

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    if (code === 'success') {
      navigate('/main');
    } else navigate('/');
  };
  return null;
};

export default Callback;
