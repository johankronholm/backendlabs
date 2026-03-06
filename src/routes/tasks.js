import { Router } from "express";
import { controller } from "../controller/taskController.js";

export const router = Router();

router.post("/show", controller.show);
router.post("/create", controller.create);
router.post("/delete", controller.delete);
router.post("/update", controller.update);
