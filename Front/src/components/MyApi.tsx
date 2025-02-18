import { useState } from "react";
import { ApiWrapper, Button, H, HeaderRow, Input, InputWrapper, ToggleBall, ToggleSwitch } from "@styles/MyPageStyles";
import { useCreateApi } from "@hooks/UseMyPage";

interface MyApiProps {
  title: string;
}

export default function MyApi({ title }: MyApiProps) {
  const { ai, apiKey, setApiKey, handleSave } = useCreateApi(title); // title을 전달하여 ai로 설정
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    if (!apiKey) return;
    setIsActive((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <ApiWrapper>
      <HeaderRow>
        <H>{ai}</H> {/* ai는 이제 title 값으로 자동 설정됨 */}
        <ToggleSwitch active={isActive} onClick={handleToggle} disabled={!apiKey}>
          <ToggleBall active={isActive} />
        </ToggleSwitch>
      </HeaderRow>
      <InputWrapper>
        <Input
          type="text"
          placeholder={`Enter ${ai} API Key`}
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSave}>Save API</Button>
      </InputWrapper>
    </ApiWrapper>
  );
}
