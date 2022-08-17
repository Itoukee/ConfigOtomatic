import express from "express";
import controller from "../controllers/components.controller";

const router = express.Router();

router.get("/", controller.getAllComponents);

router.get("/search", controller.getComponentByValue);

router.get("/:id", controller.getOneComponent);

export default router;
