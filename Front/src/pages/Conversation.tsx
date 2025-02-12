// src/pages/Conversation.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Container = styled.div`
  padding: 20px;
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 100px;
  margin: 8px;
  padding: 8px;
`;

const Button = styled.button`
  margin: 8px;
  padding: 8px 16px;
`;

const Conversation: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState<string[]>([]);

  const handleSend = async () => {
    // OpenAI를 활용한 회화 (데모용 시뮬레이션)
    const reply = `Simulated reply to: ${userInput}`;
    setConversation((prev) => [...prev, `You: ${userInput}`, `AI: ${reply}`]);
    setUserInput('');
    // 공부 기록 저장
    const records = JSON.parse(localStorage.getItem('study_records') || '[]');
    records.push(`Conversation: ${userInput}`);
    localStorage.setItem('study_records', JSON.stringify(records));
  };

  return (
    <div>
      <Navbar />
      <Container>
        <h2>회화 (Conversation)</h2>
        <TextArea
          placeholder="Enter your message"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button onClick={handleSend}>Send</Button>
        <div>
          {conversation.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Conversation;
