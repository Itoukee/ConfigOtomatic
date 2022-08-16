import AuthService from "../services/auth.service";
import "../config";
import jwt from "jsonwebtoken";
import { IUser } from "../models/user";
import config from "../config";
import bcrypt from "bcrypt";
import UserService from "../services/users.service";

const controller = {
  createOne: async (req, res, next) => {
    try {
      const user: IUser | null = await AuthService.findUser(req.body.mail);
      const email: string | undefined = req.body.mail;
      let password: string | undefined = req.body.password;

      if (!user) {
        if (!email || !password) {
          res.status(400).send("Bad JSON request");
        }
        const salt: string = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        const token: string = jwt.sign(
          { mail: email, password: password },
          config.JWT_SECRET_TOKEN,
          {
            expiresIn: config.JWT_EXPIRES_IN,
          }
        );
        if (!token) return res.status(401).send("No Token");

        AuthService.createOne({
          email: email,
          password: password,
          refresh_token: token,
        });

        res.status(201).send("User created ! ");
      } else {
        res.status(400).send("Email already used");
      }
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const refresh_token: string | undefined = req.body.refresh_token;
      const email: string | undefined = req.body.email;
      const password: string | undefined = req.body.password;

      const user = await AuthService.findUser(email);

      if (!user) return res.status(404).send("No user");
      const validPassword: string | undefined = await bcrypt.compare(
        password,
        user.password
      );

      if (refresh_token === user?.refresh_token || validPassword) {
        await updateToken(user);
        res.status(200).send(user);
      } else {
        res.status(401).send("Unauthorized");
      }
    } catch (error) {
      next(error);
    }
  },
  setAdmin: async (req, res, next) => {
    try {
      const user = await UserService.getUser(req.params.userId);
      if (!user) {return res.status(400).send("No user")}
      await UserService.patchUser(req.params.userId, {superAdmin: true});
      res.status(200).send("User set to admin")
    } catch(error) {
      next(error)
    }
  },
  disbandAdmin: async (req, res, next) => {
    try {
      const user = await UserService.getUser(req.params.userId);
      if (!user) {return res.status(400).send("No user")}
      await UserService.patchUser(req.params.userId, {superAdmin: false});
      res.status(200).send("User set to non-admin")
    } catch(error) {
      next(error)
    }
  },
};

async function updateToken(user: IUser) {
  const token: string = jwt.sign(
    { mail: user?.email, password: user?.password },
    config.JWT_SECRET_TOKEN,
    {
      expiresIn: config.JWT_EXPIRES_IN,
    }
  );
  await UserService.patchUser(user["_id"], { refresh_token: token });
}

export default controller;
