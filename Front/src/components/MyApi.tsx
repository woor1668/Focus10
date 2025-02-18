import { useState } from 'react';
import {
  ApiWrapper,
  Button,
  H,
  HeaderRow,
  Input,
  InputWrapper,
  ToggleBall,
  ToggleSwitch,
} from '@styles/MyPageStyles';

interface MyApiProps {
  title: string;
}

export default function MyApi({ title }: MyApiProps) {
  const [apiKey, setApiKey] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    if (!apiKey) return; // API key가 없으면 토글 작동 X
    setIsActive((prev) => !prev);
  };

  const handleSave = () => {
    if (!apiKey.trim()) {
      alert(`Please enter an ${title} API key.`);
      return;
    }
    alert('API Key saved!');
    setIsActive(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <ApiWrapper>
      <HeaderRow>
        <H>{title}</H>
        <ToggleSwitch active={isActive} onClick={handleToggle} disabled={!apiKey}>
          <ToggleBall active={isActive} />
        </ToggleSwitch>
      </HeaderRow>
      <InputWrapper>
        <Input
          type="text"
          placeholder={`Enter ${title} Key`}
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSave}>Save API Key</Button>
      </InputWrapper>
    </ApiWrapper>
  );
}
