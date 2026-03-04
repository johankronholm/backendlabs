import { Router } from "express";
import { controller } from "../controller/taskController.js";

export const router = Router();

router.get("/show", controller.show);
router.post("/create", controller.create);
router.delete("/delete", controller.delete);
router.patch("/update", controller.update);
