import express from "express";
import controller from "../controllers/users.controller";
import auth from "../middlewares/auth.middleware";

const router = express.Router();

/*
 * /users : Show all users
 */
router.get("/", controller.getAllUsers);

/*
 *  /users/{id} :  Show one user
 */

router.get("/:userId", controller.getUser);

/*
 *  /users/one/{id} : Make change to a user
 */
router.patch("/:userId", controller.patchUser);

router.use(auth)

export default router;
