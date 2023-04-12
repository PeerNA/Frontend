import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    if (code) {
      navigate('/main');
    } else navigate('/');
  };
  return null;
};

export default Callback;
