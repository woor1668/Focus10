import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom"
import styled from "styled-components";
import Login from '@pages/Login'
import Register from '@pages/Register';
import Home from '@pages/Home';
import { getAuth } from "@services/AuthService";
import { PopupProvider } from "@components/Popup";
import { useEffect, useState } from "react";
// import MyPage from '@routes/MyPage';
// import WordWriting from '@routes/WordWriting';
// import Speaking from '@routes/Speaking';
// import Conversation from '@routes/Conversation';

function AuthWrapper() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await getAuth();
      if (user) {
        navigate("/"); // 인증된 경우 홈으로 이동
      } else {
        navigate("/login"); // 인증 실패 시 로그인 페이지로 이동
      }
      setLoading(false);
    };
    checkAuth();
  }, [navigate]);

  if (loading) return <div>Loading...</div>; // 인증 확인 중 로딩 표시

  return null;
}

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <AuthWrapper />
          <Home />
        </>
      )
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  ])

  const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
  `;
  
  return (
    <Wrapper>
      <PopupProvider>
        <RouterProvider router={router} />
      </PopupProvider>
    </Wrapper>
  )
}

export default App
