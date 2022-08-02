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
      const userId: IUser["_id"] | undefined = req.params.userId;
      if (!userId) return res.status(400).send("Bad JSON");
      const user = await UserService.getUser(userId);
      if (!user) return res.status(404).send("No user");
      return res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  },
  patchUser: async (req, res, next) => {
    try {
      const newValues: Partial<IUser> = req.body.newValues;
      await UserService.patchUser(req.body.userId, newValues);
      return res.status(200).send("User patched");
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
