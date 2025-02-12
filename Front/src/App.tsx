import { createBrowserRouter, RouterProvider } from "react-router-dom"
import styled from "styled-components";
import Login from '@pages/Login'
import Register from '@pages/Register';
import Home from '@pages/Home';
// import MyPage from '@routes/MyPage';
// import WordWriting from '@routes/WordWriting';
// import Speaking from '@routes/Speaking';
// import Conversation from '@routes/Conversation';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
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
      <RouterProvider router={router} />
    </Wrapper>
  )
}

export default App
