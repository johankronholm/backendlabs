import { Router } from "express";
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
router.use("/tasks", taskRouter);

router.get("/", (req, res) => {
  return res.render("home/index");
});

router.get("/all", (req, res) => {
  const data = { message: req.session.prev === "all" ? req.session.status : null };
  return res.render("home/all", data);
});

router.get("/show", (req, res) => {
  const data = { message: req.session.prev === "show" ? req.session.status : null };
  return res.render("home/show", data);
});

router.get("/new", (req, res) => {
  const data = { message: req.session.prev === "new" ? req.session.status : null };
  return res.render("home/new", data);
});

router.get("/remove", (req, res) => {
  const data = { message: req.session.prev === "remove" ? req.session.status : null };
  return res.render("home/remove", data);
});

router.get("/update", (req, res) => {
  const data = { message: req.session.prev === "update" ? req.session.status : null };
  return res.render("home/update", data);
});

router.get("/day", dateChecker.verifyDate);


router.use((req, res) => {
  return res.status(404).render("404");
});
