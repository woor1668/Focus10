import { createUserAPI, selectUserAPI, updateToggle } from "@models/aiModel";
import { Request, Response } from "express";


export const selectAPI = async (req: Request, res: Response): Promise<void> => {
  try {
    const { ai } = req.body; 
    const uuid = (req as any).user?.uuid;
    const api = await selectUserAPI(uuid , ai);

    res.json({ api });
  } catch (error) {
    console.error("조회 오류:", error);
    res.status(500).json({ message: "서버 오류 발생" });
  }
};

export const createAPI = async (req: Request, res: Response): Promise<void> => {
  try {
    const { ai, apiKey } = req.body;   
    const uuid = (req as any).user?.uuid;

    await createUserAPI(uuid, ai, apiKey);

    res.status(201).json({ message: "저장 성공" });
  } catch (error) {
    console.error("저장 오류:", error);
    res.status(500).json({ message: "서버 오류 발생" });
  }
};

export const toggleChange = async (req: Request, res: Response): Promise<void> => {
  try {
    const { ai } = req.body; 
    const uuid = (req as any).user?.uuid;
   
    await updateToggle(uuid , ai);

  } catch (error) {
    console.error("토클 업데이트 오류:", error);
    res.status(500).json({ message: "서버 오류 발생" });
  }
};