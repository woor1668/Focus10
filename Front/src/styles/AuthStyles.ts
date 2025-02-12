import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;

export const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
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
    border-color: #007bff;
  }
`;

export const IconWrapper = styled.div`
  padding: 8px;
  color: #666;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 10px 16px;
  width: 100%;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const P = styled.p`
  width: 100%;
  text-align: center;
  padding: 0;
  margin: 0;
  color: tomato;
  font-size: clamp(0.7em, 5vw, 1em); /* 글자 크기 자동 조정 */
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  overflow: hidden;
  text-overflow: ellipsis;
`;