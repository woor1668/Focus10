import express from "express";
import { register, login, auth } from "@controllers/authController";

const aiRouter = express.Router();

aiRouter.post("/register", register);
aiRouter.post("/login", login);

export default aiRouter;
