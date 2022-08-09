import { IUser } from "../models/user";
import UserService from "../services/users.service";

const auth = async (req, res, next) => {
    if (!req.cookies.user) return res.status(401).send("No session");
    const user: Partial<IUser> | undefined = await UserService.getUserSession(req.cookies.user);
    if (!user) {
        res.status(401).send("No access");
    } else {
        next()
    }
}

export default auth;