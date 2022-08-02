import express from "express";
import controller from "../controllers/components.controller";

const router = express.Router();

router.get("/", controller.getAllComponents);

router.post("/create", controller.createOne);

router.delete("/:id", controller.deleteComponent);

router.get("/:id", controller.getOneComponent)

router.patch("/:id", controller.patchOneComponent)

export default router;
