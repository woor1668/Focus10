import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '@components/Navbar';

const HomeContainer = styled.div`
  width: 480px;
  padding: 20px;
`;

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HomeContainer>
        <h1>Study App</h1>
        <p>Select a study mode:</p>
        <ul>
          <li>
            <Link to="/word-writing">단어쓰기 (Word Memorization)</Link>
          </li>
          <li>
            <Link to="/speaking">말하기 (Pronunciation Check)</Link>
          </li>
          <li>
            <Link to="/conversation">회화 (Conversation)</Link>
          </li>
        </ul>
      </HomeContainer>
    </div>
  );
};

export default Home;
