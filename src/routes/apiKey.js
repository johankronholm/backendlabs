import { Router } from "express"
import { apiKey } from "../middleware/apiKey.js";

export const router = Router();

router.use(apiKey.verifyAPIKey);

router.get("/", (req, res) => {
    res.send("Correct API key! You unlocked the protected route.");
});


