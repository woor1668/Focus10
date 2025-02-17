import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import styled from "styled-components";
import Login from '@pages/Login'
import Register from '@pages/Register';
import Home from '@pages/Home';
import { getAuth } from "@services/AuthService";
import { PopupProvider } from "@components/Popup";
import { ReactNode, useEffect, useState } from "react";
import LoadingScreen from "@components/loading-screen";
// import MyPage from '@routes/MyPage';
// import WordWriting from '@routes/WordWriting';
// import Speaking from '@routes/Speaking';
// import Conversation from '@routes/Conversation';

const ProtectedRoute = ({ element }: { element: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await getAuth();
      setIsAuthenticated(authStatus);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <LoadingScreen />; // 인증 확인 중 로딩 표시
  }

  return isAuthenticated ? element : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/", element: <ProtectedRoute element={<Home />} /> }, // 보호된 경로 적용
]);

const App = () => {
  return (
    <StyledWrapper>
      <PopupProvider>
        <RouterProvider router={router} />
      </PopupProvider>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;