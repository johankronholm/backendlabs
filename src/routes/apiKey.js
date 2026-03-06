import { Router } from "express";
import { apiKey } from "../middleware/apiKey.js";

export const router = Router();

router.get("/", (req, res) => {
  req.session.data = {
    status: req.session.status ?? "Please enter your API key.",
  };
  res.render("api/home", req.session.data);
});

router.post("/submit", apiKey.authorize);
