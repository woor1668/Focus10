import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from '@services/AuthService';
// 비밀번호 유효성 검사 함수

function validatePassword(password: string): string | null {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password) ? null : "비밀번호는 최소 8자 이상이며, 문자, 숫자, 특수문자를 포함해야 합니다.";
}

export function useRegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [checkPw, setCheckPw] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (password && rePassword) {
            if (password !== rePassword) {
                setCheckPw("비밀번호가 일치하지 않습니다.");
            } else {
                setCheckPw(null);
            }
        } else {
            setCheckPw(null);
        }
    }, [password, rePassword]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
      const passwordError = validatePassword(password);
      if (passwordError) {
        setError(passwordError);
        return;
      }
      
      try {
        await registerUser(name, email, id, password);
        alert("회원가입 성공! 로그인해주세요.");
        navigate("/login");
      } catch (err) {
        console.error(err);
        setError("회원가입 실패. 다시 시도해주세요.");
      }
    };
  
    return {
      name, setName,
      email, setEmail,
      id, setId,
      password, setPassword,
      rePassword, setRePassword,
      error, checkPw,
      showPassword, setShowPassword,
      showRePassword, setShowRePassword,
      handleSubmit,
    };
}

export function useLoginForm() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
      const passwordError = validatePassword(password);
      if (passwordError) {
        setError(passwordError);
        return;
      }
      
      try {
        await loginUser(id, password);
        alert("회원가입 성공! 로그인해주세요.");
        navigate("/login");
      } catch (err) {
        console.error(err);
        setError("회원가입 실패. 다시 시도해주세요.");
      }
    };
  
    return {
      id, setId,
      password, setPassword,
      error,
      showPassword, setShowPassword,
      handleSubmit,
    };
}
