import { Router } from "express";
import { controller } from "../controller/taskController.js";

export const router = Router();

router.get("/", controller.all);
router.get("/:id", controller.show);
router.post("/", controller.create);
router.delete("/:id", controller.delete);
router.patch("/:id", controller.update);

