import express from "express";
import user_controller from "../controllers/users.controller";
import component_controller from "../controllers/components.controller";
import auth_controller from "../controllers/auth.controller"

const router = express.Router();

router.delete("/users/:userId", user_controller.deleteUser);

router.post("/components/create", component_controller.createOne);

router.delete("/components/:id", component_controller.deleteComponent);

router.patch("/components/:id", component_controller.patchOneComponent);

router.patch("/auth/setAdmin/:userId", auth_controller.setAdmin);

router.patch("/auth/disbandAdmin/:userId", auth_controller.disbandAdmin);

export default router;