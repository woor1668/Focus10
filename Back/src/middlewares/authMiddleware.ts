import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(" ")[1];
  
  if (!token) {
    res.status(403).json({ message: "인증 토큰이 필요합니다." });
    return; // ✅ 여기서 반환을 명확하게 해줌
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: "유효하지 않은 토큰입니다." });
      return; // ✅ 여기서도 반환을 명확하게 해줌
    }

    (req as any).user = decoded;
    next(); // ✅ 정상적인 경우 `next()` 호출
  });
};
