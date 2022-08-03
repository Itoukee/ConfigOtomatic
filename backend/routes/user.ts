import express from "express";
import controller from "../controllers/users.controller";

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

/**
 *  /users/one/userId : Delete a user
 */
router.delete("/:userId", controller.deleteUser);

export default router;
