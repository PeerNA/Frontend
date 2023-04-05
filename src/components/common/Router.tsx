import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Login = lazy(() => import("../../pages/Login"));
const Error404 = lazy(() => import("../../pages/Error404"));

const Router = () => (
  <BrowserRouter>
    <Suspense>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Router;
