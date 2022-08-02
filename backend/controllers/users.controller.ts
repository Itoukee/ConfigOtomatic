import { IUser } from "../models/user";
import UserService from "../services/users.service";

const controller = {
  getAllUsers: async (req, res, next) => {
    try {
      const users: IUser[] = await UserService.showAll();
      return res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  },
  getUser: async (req, res, next) => {
    try {
      if (!req.params.userId) return res.status(400).send("Bad JSON request");
      const user: IUser | undefined = await UserService.getUser(req.params.userId);
      if (!user) return res.status(404).send("No user");
      return res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  },
  patchUser: async (req, res, next) => {
    try {
      if (!req.body.newValues || !req.params.IUser) return res.status(400).send("Bad JSON request");
      await UserService.patchUser(req.params.IUser, req.body.newValues);
      return res.status(200).send("User patched");
    } catch (error) {
      next(error);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      if (!req.params.userId) return res.status(400).send("Bad JSON request");
      UserService.deleteUser(req.params.userId);
      res.status(200).send("User deleted");
    } catch (error) {
      next(error);
    }
  }
};

export default controller;
