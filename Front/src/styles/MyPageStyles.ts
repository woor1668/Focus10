import styled from "styled-components";

export const ApiWrapper = styled.div`
    display: grid;
    padding: 10px;
    gap: 10px;
`;

export const HeaderRow = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const H = styled.h4`
    margin: 0;
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
    left: ${props => (props.active ? '27px' : '2px')};
    transition: left 0.3s;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
`;

export const Input = styled.input`
    flex: 8;
    padding: 10px;
    border: none;
    outline: none;
`;

export const Button = styled.button`
    flex: 2;
    padding: 10px;
    background-color: #444;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #666;
    }
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