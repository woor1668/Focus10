// src/pages/WordWriting.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

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

export default function Word() {
  const [word, setWord] = useState('');
  const [response, setResponse] = useState('');

  const handleCheckWord = async () => {
    // OpenAI를 활용한 단어 암기 도움(데모용 시뮬레이션)
    setResponse(`Simulated response for word: ${word}`);
    // 공부 기록 저장 (데모용으로 localStorage 사용)
    const records = JSON.parse(localStorage.getItem('study_records') || '[]');
    records.push(`Word Writing: ${word}`);
    localStorage.setItem('study_records', JSON.stringify(records));
  };

  return (
    <Container>
      <h2>단어쓰기 (Word Memorization)</h2>
      <Input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <Button onClick={handleCheckWord}>Check Word</Button>
      {response && <p>{response}</p>}
    </Container>
  );
};