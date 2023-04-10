import { lazy } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const LoginPage = lazy(() => import('./@components/LoginPage'));
const CallBack = lazy(() => import('./@components/LoginPage/Callback'));
const MainPage = lazy(() => import('./@components/MainPage'));

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/callback" element={<CallBack />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
