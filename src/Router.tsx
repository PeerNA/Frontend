import { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const LoginPage = lazy(() => import('./@components/LoginPage'));
const CallBack = lazy(() => import('./@components/LoginPage/Callback'));
const MainPage = lazy(() => import('./@components/MainPage'));
const LearningDetailPage = lazy(() => import('./@components/LearningDetailPage'));
const AnswerListPage = lazy(() => import('./@components/AnswerListPage'));

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Suspense>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/callback" element={<CallBack />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/detail/:historyId" element={<LearningDetailPage />} />
            <Route path="/answerList/:problemId" element={<AnswerListPage />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
