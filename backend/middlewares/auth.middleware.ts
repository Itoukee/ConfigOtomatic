import { IUser } from "../models/user";
import UserService from "../services/users.service";

export const isAdmin = (req, res, next) => {
  console.log(req.body);

  if (!req.body.user || !req.body.user.superAdmin) {
    const err: any = new Error("Forbidden");
    err.status = 403;
    next(err);
  } else next(); // is superAdmin
};

export const auth = async (req, res, next) => {
  if (!req.cookies.user) return res.status(401).send("No session");
  const user: Partial<IUser> | undefined = await UserService.getUserSession(
    req.cookies.user
  );
  if (!user) {
    res.status(401).send("No access");
  } else {
    next();
  }
};
