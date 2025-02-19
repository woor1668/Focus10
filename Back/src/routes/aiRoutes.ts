import { createAPI, selectAPI, toggleChange } from "@controllers/aiController";
import { getUuid } from "@middlewares/authMiddleware";
import express from "express";

const aiRouter = express.Router();

aiRouter.post('/createAPI', getUuid, createAPI);
aiRouter.post("/selectAPI", getUuid, selectAPI);
aiRouter.post("/toggleChange", getUuid, toggleChange);
export default aiRouter;
