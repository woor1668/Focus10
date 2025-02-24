import styled from "styled-components";

// 헤더 부분 //
export const Section = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: #f9f9f9;
`;

export const SectionHeader = styled.div`
  padding: 10px 15px;
  background: #444;
  color: white;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #666;
  }
  `;

export const Content = styled.div<{ maxHeight: string }>`
    max-height: ${({ maxHeight }) => maxHeight};
    overflow: hidden;
    transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out;
    opacity: ${({ maxHeight }) => (maxHeight === "0px" ? 0 : 1)};
`;

// 컨텐츠 부분 //
export const ApiWrapper = styled.div`
    display: grid;
    padding: 10px;
    gap: 10px;
`;

export const H = styled.h4`
    margin: 0;
`;

export const Strong = styled.strong`
`;

export const Input = styled.input`
    flex: 8;
    padding: 10px;
    border: none;
    outline: none;
`;

export const Button = styled.button`
    flex: 2;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

// MyInfo
export const SelectBox = styled.select`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  background: white;
  cursor: pointer;
`;

export const ButtonDiv = styled.div`
    display: flex;
    gap: 10px;
`;

export const InfoButton = styled.button`
    flex: 2;
    border-radius: 10px;
`;



// MyAPI
export const HeaderRow = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

interface ToggleProps {
    active: boolean;
  }
  
export const ToggleSwitch = styled.button<ToggleProps>`
    width: 40px;
    height: 20px;
    background-color: ${props => (props.active ? '#4CAF50' : '#ccc')};
    border: none;
    border-radius: 25px;
    position: relative;
    cursor: pointer;
    padding: 0;
    transition: background-color 0.3s;
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const ToggleBall = styled.div<ToggleProps>`
    width: 18px;
    height: 18px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 1px;
    left: ${props => (props.active ? '21px' : '1px')};
    transition: left 0.3s;
`;

export const ApiButton = styled.button`
    flex: 2;
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

export const TabGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 20px;
`;

export const Tab = styled.button`
    padding: 10px;
    background-color: #ddd;
    border: none;
    cursor: pointer;
    &.active {
        background-color: #aaa;
    }
`;