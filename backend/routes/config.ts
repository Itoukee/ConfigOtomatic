import express from "express";
import controller from "../controllers/config.controller";

const router = express.Router();

router.get("/:id", controller.getConfigs);

router.get("/one/:id", controller.getById);

router.post("/create/:userId", controller.createConfig);

router.patch("/:id", controller.updateConfig);

router.delete("/:id", controller.deleteConfig);

export default router;
