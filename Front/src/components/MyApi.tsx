import { ApiWrapper, Button, H, HeaderRow, Input, InputWrapper, ToggleBall, ToggleSwitch } from "@styles/MyPageStyles";
import { useMyApi } from "@hooks/UseMyPage";
import { P } from "@styles/AuthStyles";

interface MyApiProps {
  title: string;
  activeApi: string;
  setActiveApi: React.Dispatch<React.SetStateAction<string>>;
}

export default function MyApi({ title, activeApi, setActiveApi }: MyApiProps) {
  const { apiKey, setApiKey, err, isValid, handleSave, handleToggle, isDisabled } = useMyApi(title, activeApi, setActiveApi);
  const isActive = activeApi === title;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <ApiWrapper>
      <HeaderRow>
        <H>{title}</H>
        <ToggleSwitch active={isActive} onClick={handleToggle} disabled={!apiKey || !isValid || isDisabled}>
          <ToggleBall active={isActive} />
        </ToggleSwitch>
      </HeaderRow>
      <InputWrapper>
        <Input
          type="password"
          placeholder={`Enter ${title} API Key`}
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSave}>Save API</Button>
      </InputWrapper>
      {err && <P style={{ color: "red" }}>{err}</P>}
    </ApiWrapper>
  );
}