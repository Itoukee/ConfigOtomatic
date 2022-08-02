import express from "express";
import controller from "../controllers/components.controller";

const router = express.Router();

router.get("/", controller.getComponents);

router.post("/create", controller.createOne);

router.delete("/:id", controller.deleteComponent);

export default router;
