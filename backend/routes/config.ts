import express from "express";
import controller from "../controllers/config.controller";

const router = express.Router();

router.get("/:id", controller.getConfig);

router.post("/create", controller.createConfig);

router.patch("/:id", controller.updateConfig);

router.delete("/:id", controller.deleteConfig);

export default router;
