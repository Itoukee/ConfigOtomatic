import express from "express";
import controller from "../controllers/components.controller";
import { isAdmin } from "../middlewares/auth.middleware";
const router = express.Router();

router.get("/", controller.getAllComponents);

router.get("/search", controller.getComponentByValue);

router.get("/:id", controller.getOneComponent);

export default router;
