import { 
  checkApiKeyValidityForAi, 
  CreateUsersAPI, 
  SelectUsersAPI, 
  toggleChange 
} from "@services/AiService";
import { useState, useEffect, useCallback } from "react";
import { usePopup } from "./UsePopup";

const TOGGLE_LOCK_TIME = 30000;

export function useMyApi(
  title: string,
  activeApi: string,
  setActiveApi: React.Dispatch<React.SetStateAction<string>>
) {
  const [apiKey, setApiKey] = useState("");
  const [err, setErr] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { showAlert } = usePopup();

  // 토글 버튼 비활성화를 일정 시간동안 유지하는 함수
  const disableToggle = useCallback(() => {
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), TOGGLE_LOCK_TIME);
  }, []);

  // 컴포넌트 마운트 시, 최근 토글 변경 이력이 있다면 비활성화 유지
  useEffect(() => {
    const lockTimestamp = localStorage.getItem("toggleLockTime");
    if (lockTimestamp) {
      const elapsed = Date.now() - parseInt(lockTimestamp, 10);
      if (elapsed < TOGGLE_LOCK_TIME) {
        setIsDisabled(true);
        setTimeout(() => setIsDisabled(false), TOGGLE_LOCK_TIME - elapsed);
      }
    }
  }, []);

  // API-KEY의 유효성을 검증하는 함수 (타이틀은 외부 인자로 전달)
  const validateApiKey = useCallback(
    async (key: string) => {
      setErr("");
      const valid = await checkApiKeyValidityForAi(title, key);
      if (!valid) {
        setErr("잘못된 API-KEY입니다");
        return false;
      }
      return true;
    },
    [title]
  );

  // title이 변경될 때 사용자 데이터를 불러옴
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setErr("");
      try {
        const data = await SelectUsersAPI(title);
        if (!data) {
          setApiKey("");
          return;
        }
        const { api } = data;
        // 받아온 데이터의 ai 값이 현재 title과 일치하면 apiKey를 사용
        const key = api.ai === title ? api.api_key : "";
        setApiKey(key);

        if (api.checked) {
          setActiveApi(api.ai);
        }

        const valid = await validateApiKey(key);
        setIsValid(valid);
      } catch (error) {
        console.error(error);
        setApiKey("");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [title, setActiveApi, validateApiKey]);

  // API-KEY를 저장하는 함수
  const handleSave = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    setErr("");
    try {
      await CreateUsersAPI(title, apiKey);
      await showAlert({ message: "저장되었습니다.", header: "성공" });
      const valid = await validateApiKey(apiKey);
      setIsValid(valid);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [loading, title, apiKey, showAlert, validateApiKey]);

  // API 활성화 토글 함수
  const handleToggle = useCallback(() => {
    if (isDisabled) return;
    const newActiveApi = activeApi === title ? "" : title;
    setActiveApi(newActiveApi);
    toggleChange(newActiveApi);
    localStorage.setItem("toggleLockTime", Date.now().toString());
    disableToggle();
  }, [activeApi, title, setActiveApi, isDisabled, disableToggle]);

  return {
    title,
    apiKey,
    setApiKey,
    err,
    isValid,
    handleSave,
    handleToggle,
    isDisabled,
    loading,
  };
}
