import { Link } from "react-router-dom";
import { InputWrapper, Input, Button, Wrapper, Form, IconWrapper, P, Container } from "@styles/AuthStyles";
import { FaUser, FaEnvelope, FaIdCard, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useRegisterForm } from "@hooks/UseAuthForm";

export default function Register() {
  const { name, setName, email, setEmail, id, setId, password, setPassword, rePassword, setRePassword, error, checkPw, handleSubmit, showPassword, setShowPassword, showRePassword, setShowRePassword } = useRegisterForm();

  return (
    <Wrapper>
      <Container>
        <h2>회원가입</h2>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <IconWrapper><FaUser /></IconWrapper>
            <Input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} required />
          </InputWrapper>
          
          <InputWrapper>
            <IconWrapper><FaEnvelope /></IconWrapper>
            <Input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </InputWrapper>
          
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
          
          <InputWrapper>
            <IconWrapper><FaLock /></IconWrapper>
            <Input type={showRePassword ? "text" : "password"} placeholder="비밀번호 확인" value={rePassword} onChange={(e) => setRePassword(e.target.value)} required />
            <IconWrapper onClick={() => setShowRePassword(!showRePassword)}>
              {showRePassword ? <FaEyeSlash /> : <FaEye />}
            </IconWrapper>
          </InputWrapper>
          {checkPw && <P>{checkPw}</P>}
          <Button type="submit">회원가입</Button>
        </Form>
        {error && <P>{error}</P>}
        <p>
          계정이 있으신가요? <Link to="/login">로그인</Link>
        </p>
      </Container>
    </Wrapper>
  );
}
