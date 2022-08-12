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
      if (req.body.refresh_token == null) {
        res.status(400).send("Bad JSON request");
      }

      const user: IUser | undefined = await AuthService.findUser(req.body.mail);
      const refresh_token: string | undefined = req.body.refresh_token;
      const password: string | undefined = req.body.password;

      if (!user) return res.status(404).send("No user");
      const validPassword: string | undefined = await bcrypt.compare(
        password,
        user.password
      );

      if (refresh_token === user?.refresh_token) {
        await updateToken(user);
        res.status(200).send("Connected with token");
      } else if (validPassword) {
        await updateToken(user);
        res.status(200).send("Connected with password");
      } else {
        res.status(401).send("Cannot login");
      }
    } catch (error) {
      next(error);
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
