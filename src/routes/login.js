import { Router } from "express";
import { controller } from "../controller/loginController.js"
import { jsonWebToken } from "../middleware/jtw.js";

export const router = Router();

router.get("/", (req, res) => {
    const data = {status : req.session.status ?? "Please provide the credentials above."}
    return res.render("login/index", data)
});

router.post("/submit", controller.verifyUser);

router.get("/test", jsonWebToken.verifyToken, (req, res) => {
    return res.send("Token accepted! Welcome.")
});

