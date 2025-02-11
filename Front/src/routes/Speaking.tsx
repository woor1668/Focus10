// src/pages/Speaking.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Container = styled.div`
  padding: 20px;
`;

const Input = styled.input`
  margin: 8px;
  padding: 8px;
  width: 300px;
`;

const Button = styled.button`
  margin: 8px;
  padding: 8px 16px;
`;

const Speaking: React.FC = () => {
  const [phrase, setPhrase] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleCheckPronunciation = async () => {
    // OpenAI를 활용한 발음 피드백 (데모용 시뮬레이션)
    setFeedback(`Simulated pronunciation feedback for: ${phrase}`);
    // 공부 기록 저장
    const records = JSON.parse(localStorage.getItem('study_records') || '[]');
    records.push(`Speaking: ${phrase}`);
    localStorage.setItem('study_records', JSON.stringify(records));
  };

  return (
    <div>
      <Navbar />
      <Container>
        <h2>말하기 (Pronunciation Check)</h2>
        <Input
          type="text"
          placeholder="Enter phrase for pronunciation check"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
        />
        <Button onClick={handleCheckPronunciation}>Check Pronunciation</Button>
        {feedback && <p>{feedback}</p>}
      </Container>
    </div>
  );
};

export default Speaking;
