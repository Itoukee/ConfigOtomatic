import express from "express";
import controller from "../controllers/auth.controller";

const router = express.Router();

router.post("/create", controller.createOne);

router.post("/login", controller.login);

export default router;
