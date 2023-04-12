import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    console.log(code);
    if (code) {
      navigate('/main');
    }
    navigate('/');
  };
  return null;
};

export default Callback;
