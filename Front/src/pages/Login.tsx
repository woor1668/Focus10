import { Link } from 'react-router-dom';
import { FaIdCard, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Input, Button, Wrapper, Form, InputWrapper, IconWrapper, P } from "@styles/AuthStyles";
import { useLoginForm } from '@src/hooks/UseAuthForm';

export default function Login() {
const { id, setId, password, setPassword, error, handleSubmit, showPassword, setShowPassword} = useLoginForm();



  return (
    <Wrapper>
      <h2>로그인</h2>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <IconWrapper><FaIdCard /></IconWrapper>
          <Input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} required />
        </InputWrapper>
        
        <InputWrapper>
          <IconWrapper><FaLock /></IconWrapper>
          <Input type={showPassword ? "text" : "password"} placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <IconWrapper onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </IconWrapper>
        </InputWrapper>
        <Button type="submit">Login</Button>
      </Form>
      {error && <P style={{ color: "red" }}>{error}</P>}
      <p>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Wrapper>
  );
};