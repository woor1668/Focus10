import express from "express";
import { register, login, auth } from "@controllers/authController";
import { authenticateJWT } from "@middlewares/authMiddleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/auth", authenticateJWT, auth);
export default router;
