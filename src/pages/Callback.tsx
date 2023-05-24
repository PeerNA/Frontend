import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { getUserInfo } from '../lib/api/auth';
import { peerMatchInfoState, replyAnswerInfoState } from '../recoil/atom/problemInfo';
import { modalInfoState } from '../recoil/atom/profileBar';
import { userInfoState } from '../recoil/atom/userInfo';

const Callback = () => {
  const code = new URL(window.location.href).searchParams.get('login');
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoState);
  const resetModalInfo = useResetRecoilState(modalInfoState);
  const resetPeerMatchInfo = useResetRecoilState(peerMatchInfoState);
  const resetReplyAnswerInfo = useResetRecoilState(replyAnswerInfoState);

  useEffect(() => {
    resetModalInfo();
    resetPeerMatchInfo();
    resetReplyAnswerInfo();
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
