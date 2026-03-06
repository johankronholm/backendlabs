import { Router } from "express";
import { controller as taskController } from "../controller/taskController.js";
import { dateChecker } from "../middleware/dateChecker.js";
import { jsonWebToken } from "../middleware/jtw.js";
import { apiKey } from "../middleware/apiKey.js";
import { router as taskRouter } from "../routes/tasks.js";
import { router as apiKeyRouter } from "../routes/apiKey.js";
import { router as loginRouter } from "../routes/login.js";

export const router = Router();

router.use("/apikey", apiKeyRouter);

router.use(apiKey.verifyAPIKey);

router.use("/login", loginRouter);

router.use(jsonWebToken.verifyToken);

router.get("/", (req, res) => {
  return res.render("home/index");
});
router.get("/day", dateChecker.verifyDate);

router.use("/tasks", taskRouter);

router.get("/all", taskController.all);

router.get("/show", (req, res) => {
  req.session.data = { task: null, prev: false, status: null };
  return res.render("home/show", req.session.data);
});
router.get("/new", (req, res) => {
  req.session.data = { prev: false, status: null };
  return res.render("home/new", req.session.data);
});
router.get("/remove", (req, res) => {
  req.session.data = { prev: false, status: null };
  return res.render("home/remove", req.session.data);
});
router.get("/update", (req, res) => {
  req.session.data = { prev: false, status: null };
  return res.render("home/update", req.session.data);
});

router.use((req, res) => {
  return res.status(404).render("404");
});
