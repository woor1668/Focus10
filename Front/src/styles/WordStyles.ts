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
    /* width: 100%; */
    align-items: center;
    text-align: center;
    min-height: 90px;
    padding: 15px;
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
  height: 100px;
  width: 200px;
  background-color: #444;
  background: linear-gradient(135deg, transparent 28px, #444 0);
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
  transition: ease-in-out 0.3s;

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

