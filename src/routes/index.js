import { Router } from "express"
import { router as taskRouter } from "../routes/tasks.js"
import { router as apiKeyRouter } from "../routes/apiKey.js"

export const router = Router();

router.use("/tasks", taskRouter); 
router.use("/apikey", apiKeyRouter);