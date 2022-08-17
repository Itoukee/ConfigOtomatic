import express from "express";
import controller from "../controllers/admin.controller";
import { isAdmin } from "../middlewares/auth.middleware";

const router = express.Router();

router.delete("/users/:userId", controller.deleteUser);

router.post("/components/create", isAdmin, controller.createOne);

router.delete("/components/:id", controller.deleteComponent);

router.patch("/components/:id", controller.patchOneComponent);

router.patch("/auth/setAdmin/:userId", controller.setAdmin);

router.patch("/auth/disbandAdmin/:userId", controller.disbandAdmin);

export default router;
