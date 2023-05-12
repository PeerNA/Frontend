import { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const LoginPage = lazy(() => import('./pages/Login'));
const CallBack = lazy(() => import('./pages/Callback'));
const MainPage = lazy(() => import('./pages/Main'));
const LearningDetailPage = lazy(() => import('./pages/LearningDetail'));
const AnswerListPage = lazy(() => import('./pages/AnswerList'));
const PeerMatchingPage = lazy(() => import('./pages/PeerMatching'));

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
            <Route path="/answerList" element={<AnswerListPage />} />
            <Route path="/problem-room/:roomId" element={<PeerMatchingPage />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
