// src/pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Input = styled.input`
  margin: 8px;
  padding: 8px;
  width: 200px;
`;

const Button = styled.button`
  margin: 8px;
  padding: 8px 16px;
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 더미 로그인 처리 (실제 구현 시 API 호출)
    if (email && password) {
      localStorage.setItem('token', 'dummy-token');
      navigate('/');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </LoginContainer>
  );
};

export default Login;
