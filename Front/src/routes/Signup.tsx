// src/pages/Signup.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const SignupContainer = styled.div`
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

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // 더미 회원가입 처리 (실제 구현 시 API 호출)
    if (email && password) {
      alert('Signup successful. Please login.');
      navigate('/login');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <SignupContainer>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
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
        <Button type="submit">Sign Up</Button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </SignupContainer>
  );
};

export default Signup;
