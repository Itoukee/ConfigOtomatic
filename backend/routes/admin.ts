import express from "express";
import controller from "../controllers/admin.controller";
import { isAdmin } from "../middlewares/auth.middleware";

const router = express.Router();

router.delete("/users/:userId", isAdmin, controller.deleteUser);

router.post("/components/create", isAdmin, controller.createOne);

router.delete("/components/:id", isAdmin, controller.deleteComponent);

router.patch("/components/:id", isAdmin, controller.patchOneComponent);

router.patch("/auth/setAdmin/:userId", isAdmin, controller.setAdmin);

router.patch("/auth/disbandAdmin/:userId", isAdmin, controller.disbandAdmin);

export default router;
