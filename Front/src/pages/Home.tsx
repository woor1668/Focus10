import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "@components/Navbar";
import { Container, Wrapper } from "@src/styles/HomeStyles";

export default function Home() {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <h1>Study App</h1>
        <p>Select a study mode:</p>
        <ul>
          <li>
            <Link to="/word">단어쓰기 (Word Memorization)</Link>
          </li>
          <li>
            <Link to="/speak">말하기 (Pronunciation Check)</Link>
          </li>
          <li>
            <Link to="/conversation">회화 (Conversation)</Link>
          </li>
        </ul>
      </Container>

      {/* 🔥 추가된 부분: Nested Route (중첩 라우트) 렌더링 */}
      <Outlet />
    </Wrapper>
  );
}
