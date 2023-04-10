import { lazy } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const LoginPage = lazy(() => import('./@components/LoginPage'));
const CallBack = lazy(() => import('./@components/LoginPage/Callback'));
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
