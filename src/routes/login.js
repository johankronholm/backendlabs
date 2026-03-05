import { Router } from "express";
import { controller } from "../controller/loginController.js"
import { jsonWebToken } from "../middleware/jtw.js";

export const router = Router();

router.get("/", (req, res) => {
    const data = {status : "Please provide the credentials above."}
    res.render("login/home", data)
});

router.post("/submit", controller.verifyUser);

router.use(jsonWebToken.verifyToken);

router.get("/home", (req, res) => {
    res.send("Token accepted! Welcome.")
});