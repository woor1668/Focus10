// src/pages/MyPage.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const MyPageContainer = styled.div`
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

const MyPage: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [savedApiKey, setSavedApiKey] = useState('');
  const [studyRecords, setStudyRecords] = useState<string[]>([]);

  useEffect(() => {
    // 저장된 API 키 불러오기
    const key = localStorage.getItem('openai_api_key') || '';
    setSavedApiKey(key);

    // 공부 기록 불러오기 (데모용 더미 기록)
    const records = JSON.parse(localStorage.getItem('study_records') || '[]');
    setStudyRecords(records);
  }, []);

  const handleSaveApiKey = () => {
    localStorage.setItem('openai_api_key', apiKey);
    setSavedApiKey(apiKey);
    alert('API Key saved!');
  };

  return (
    <div>
      <Navbar />
      <MyPageContainer>
        <h2>My Page</h2>
        <div>
          <h3>Register OpenAI API Key</h3>
          <Input
            type="text"
            placeholder="Enter OpenAI API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <Button onClick={handleSaveApiKey}>Save API Key</Button>
          {savedApiKey && (
            <p>
              <strong>Saved API Key:</strong> {savedApiKey}
            </p>
          )}
        </div>
        <div>
          <h3>Study Records</h3>
          {studyRecords.length === 0 ? (
            <p>No records yet.</p>
          ) : (
            <ul>
              {studyRecords.map((record, index) => (
                <li key={index}>{record}</li>
              ))}
            </ul>
          )}
        </div>
      </MyPageContainer>
    </div>
  );
};

export default MyPage;
