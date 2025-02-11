import { createBrowserRouter, RouterProvider } from "react-router-dom"
import styled from "styled-components";
import Login from '@routes/Login'
import Signup from '@routes/Signup';
import Home from '@routes/Home';
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
      path: "/Signup",
      element: <Signup />,
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
