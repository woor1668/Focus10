import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findUserByEmail, createUser } from "../models/userModel";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, id, pw } = req.body;
    console.log(1111);
    if (!email || !pw) {
      res.status(400).json({ message: "이메일과 비밀번호를 입력하세요." });
      return;
    }

    res.status(201).json({ message: "회원가입 성공" });
    

//     const existingUser = await findUserByEmail(email);
//     if (existingUser) {
//       res.status(400).json({ message: "이미 가입된 이메일입니다." });
//       return;
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     await createUser(email, hashedPassword);

//     res.status(201).json({ message: "회원가입 성공" });
  } catch (error) {
    console.error("회원가입 오류:", error);
    res.status(500).json({ message: "서버 오류 발생" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user) {
      res.status(401).json({ message: "이메일 또는 비밀번호가 틀렸습니다." });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: "이메일 또는 비밀번호가 틀렸습니다." });
      return;
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, user: { id: user.id, email: user.email } });
  } catch (error) {
    console.error("로그인 오류:", error);
    res.status(500).json({ message: "서버 오류 발생" });
  }
};
