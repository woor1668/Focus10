import { Link } from 'react-router-dom';
import { FaIdCard, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Input, Button, Wrapper, Form, InputWrapper, IconWrapper, P, Container } from "@styles/AuthStyles";
import { useLoginForm } from '@src/hooks/UseAuthForm';

export default function Login() {
const { eid, setEid, password, setPassword, error, handleSubmit, showPassword, setShowPassword} = useLoginForm();

  return (
    <Wrapper>
      <Container>
        <h2>로그인</h2>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <IconWrapper><FaIdCard /></IconWrapper>
            <Input type="text" placeholder="아이디 또는 이메일" value={eid} onChange={(e) => setEid(e.target.value)} required />
          </InputWrapper>
          
          <InputWrapper>
            <IconWrapper><FaLock /></IconWrapper>
            <Input type={showPassword ? "text" : "password"} placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <IconWrapper isClickable={true} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </IconWrapper>
          </InputWrapper>
          <Button type="submit">Login</Button>
        </Form>
        {error && <P style={{ color: "red" }}>{error}</P>}
        <p>
          계정이 없으신가요? <Link to="/register">회원가입</Link>
        </p>
      </Container>
    </Wrapper>
  );
};