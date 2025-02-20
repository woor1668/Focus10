import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 480px;
  height: 100%;
  padding: 50px 0px;
  `;

export const Container = styled.div`
  width: 100%;
  text-align: center;
  flex-direction: column;
  box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.5);
  padding: 20px;
  margin: 10px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  background: white;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  font-size: 16px;
  outline: none;
  padding: 8px;

  &:focus {
    border-color: #444;
  }
`;

export const IconWrapper = styled.div<{ isClickable?: boolean }>`
  padding: 8px;
  color: #666;
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
`;

export const Button = styled.button`
  padding: 10px 16px;
  width: 100%;
  font-size: 16px;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #666;
  }
`;

export const P = styled.p`
  width: 100%;
  text-align: center;
  padding: 0;
  margin: 0;
  color: tomato;
  font-size: clamp(0.8em, .8vw, 1em); /* 글자 크기 자동 조정 */
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledLink = styled(Link)`
  color: #444;
  text-decoration: none;

  &:hover{
    color: #666;
  }
`;