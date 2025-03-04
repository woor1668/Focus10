import styled from "styled-components";
import { AiOutlineSound } from "react-icons/ai";
import { motion } from "framer-motion";

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
`

export const Header = styled.h2`
`;

export const Text = styled.div`
`;

export const Strong = styled.strong`
    font-size: 1.7em;
    margin-right: 3px;
`;

export const Sound = styled(AiOutlineSound)`
  color: #444;
  cursor: pointer;

  &:hover{
    color: #666;
  }
`;

export const Question = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 15px;
    height: 200px;
    justify-content: center;
`

export const Button = styled.button`
    height: 100%;
    width: 100%;
`

export const ButtonForm = styled.div`
    display: flex;
`


export const StickerButton = styled.button`
  position: relative;
  height: 200px;
  width: 400px;
  background-color: #444;
  background: linear-gradient(135deg, transparent 28px, #444 0);
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;  
  transition: transform 0.3s, background 0.3s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, transparent 50%, #888 0);
    transform-origin: top left;
    transition: transform 0.3s;
  }

  &:hover {
    background: linear-gradient(135deg, transparent 36px, #444 0) !important;

    &::before {
      transform: scale(1.25); /* 비율 유지하며 크기 확대 */
    }
  }
`;

// export const StickerButton = styled.button`
//   position: relative;
//   height: 200px;
//   width: 400px;
//   background: #444;
//   border: none;
//   cursor: pointer;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     border-top: 28px solid #444;
//     border-right: 28px solid transparent;
//     transition: border-top-width 0.3s, border-right-width 0.3s;
//   }

//   &:hover::before {
//     border-top-width: 36px;
//     border-right-width: 36px;
//   }
// `
