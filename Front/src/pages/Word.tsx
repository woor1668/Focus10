// src/pages/WordWriting.tsx
import { selectWord } from '@services/myPage/MyApiService';
import { Container } from '@styles/HomeStyles';
import { ApiButton, ButtonDiv, InfoButton, Input, InputWrapper } from '@styles/MyPageStyles';
import { Form, Header, Question, Sound, StickerButton, Strong, Text } from '@styles/WordStyles';
import { useEffect, useState } from 'react';

export default function Word() {
  const [word, setWord] = useState('');
  const [isTest, setIsTest] = useState(false);
  const [response, setResponse] = useState('');

  useEffect(() => {
    selectWord();
  }, []);

  const handleCheckWord = async () => {
    setResponse(`Simulated response for word: ${word}`);
    const records = JSON.parse(localStorage.getItem('study_records') || '[]');
    records.push(`Word Writing: ${word}`);
    localStorage.setItem('study_records', JSON.stringify(records));
  };

  return (
    <Container>
      <Form>
        <Header>단어쓰기<br/>(Word Memorization)</Header>
        <Text>
          <Strong>text</Strong>
          <sup><Sound /></sup>
          <sub>단어</sub>
        </Text>
        <Question>
          {!isTest ? (
            <StickerButton onClick={() => setIsTest((prev) => !prev)}>Check</StickerButton>
          ) : (
            <>
              <Strong>im text</Strong>
              <InputWrapper>
                <Input
                  type="text"
                  placeholder="Enter a word"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
                <ApiButton onClick={handleCheckWord}>Check</ApiButton>
              </InputWrapper>
              {response && <p>{response}</p>}
            </>
          )}
        </Question>
        <ButtonDiv>
          <InfoButton onClick={handleCheckWord}>Prev</InfoButton>
          <InfoButton onClick={handleCheckWord}>Next</InfoButton>
        </ButtonDiv>
      </Form>
    </Container>
  );
}
