import express from "express";
import controller from "../controllers/users.controller";

const router = express.Router();

/*
 * Show all users
 */
router.get("/", controller.getAllUsers);

/*
 * (get) /api/user/{id} :  Show one user
 */

router.get("/:userId", controller.getUser);

/*
 *  (patch) Make change to a user
 */
router.patch("/one/:userId", controller.patchUser);

export default router;
