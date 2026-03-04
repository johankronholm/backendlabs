import { Router } from "express"
import { router as taskRouter } from "../routes/tasks.js"

export const router = Router();

router.use("/tasks", taskRouter); 