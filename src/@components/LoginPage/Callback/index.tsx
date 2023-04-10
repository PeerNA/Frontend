import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_REST_API_KEY,
      redirect_uri: process.env.REACT_APP_REDIRECT_URL,
      code,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    });
    try {
      //   const { data: githubRes } = await axios.get('https://kauth.kakao.com/oauth/token', payload);
      //   if (data.isUser) {
      //     // 로그인
      //     const signInData = await postKakaoSignIn(data.uid);
      //     setUserSession(signInData.accessToken);
      //     navigate('/home');
      //     window.location.reload();
      //   } else if (!data.isUser) {
      //     // 회원가입
      //     navigate('/main', { state: { uid: data.uid } });
      //   }
    } catch (err) {
      console.error(err);
    }
  };

  return null;
  return <div></div>;
};

export default Callback;
