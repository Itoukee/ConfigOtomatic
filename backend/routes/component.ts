import express from "express";
import controller from "../controllers/components.controller";
import { isAdmin } from "../middlewares/auth.middleware";
const router = express.Router();

router.get("/", controller.getAllComponents);
router.get("/search", controller.getComponentByValue);

router.post("/create", isAdmin, controller.createOne);

router.delete("/:id", controller.deleteComponent);

router.get("/:id", controller.getOneComponent);

router.patch("/:id", controller.patchOneComponent);

export default router;
