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
  border-radius: 4px;
`;

export const StyledLink = styled(Link)`
  color: #444;
  text-decoration: none;

  &:hover{
    color: #666;
  }
`;

export const PwContainer = styled.div`
`

export const PwDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  text-align: left;
  padding: 5px;
`;

export const PwIcon = styled.div<{ isValid: boolean | null }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 5px;
  color: ${({ isValid }) => 
    isValid === null ? "#AAA" : 
    isValid ? "green" : "red"};
`;
