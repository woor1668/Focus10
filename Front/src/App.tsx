import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import styled from "styled-components";
import Login from '@pages/Login'
import Register from '@pages/Register';
import Home from '@pages/Home';
import MyPage from '@pages/MyPage';
import Word from '@pages/WordWriting';
import Speak from '@pages/Speaking';
import { getAuth } from "@services/AuthService";
import { PopupProvider } from "@components/Popup";
import { ReactNode, useEffect, useState } from "react";
import LoadingScreen from "@components/loading-screen";
// import Conversation from '@routes/Conversation';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await getAuth();
      setIsAuthenticated(authStatus);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <LoadingScreen />;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    children: [
      { path: "word", element: <Word /> },
      { path: "speak", element: <Speak /> },
    ],
  },
  { path: "/my", 
    element:       
      <ProtectedRoute>
        <MyPage />
      </ProtectedRoute> 
  },
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