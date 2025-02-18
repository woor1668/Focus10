import { CreateUsersApi } from "@services/AiService";
import { useState, useEffect } from "react";
import { usePopup } from "./UsePopup";

export function useCreateApi(title: string) {
    const [ai, setAi] = useState(title);
    const [apiKey, setApiKey] = useState("");
    const [loading, setLoading] = useState(false);
    const { showAlert } = usePopup();

    useEffect(() => {
        setAi(title); // title이 변경될 때 ai 값도 업데이트
    }, [title]);

    const handleSave = async () => {
        if (!apiKey.trim()) {
            await showAlert({
                message: `${ai} key를 입력하세요.`,
                header: "오류",
            });
            return;
        }
        if (loading) return;

        setLoading(true);
        const uuid = localStorage.getItem("uuid") || ""; // uuid를 즉시 가져옴

        try {
            await CreateUsersApi(uuid, ai, apiKey);
            await showAlert({
                message: "저장되었습니다.",
                header: "성공",
            });
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        ai, setAi, // title이 ai에 자동 반영됨
        apiKey, setApiKey,
        handleSave,
        loading,
    };
}
