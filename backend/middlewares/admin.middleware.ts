import { IUser } from "../models/user";
import UserService from "../services/users.service";

const admin = async (req, res, next) => {
    if (!req.cookies.user) res.status(401).send("No session");
    const user: Partial<IUser> | undefined = await UserService.getUserSession(req.cookies.user);
    if (!user.superAdmin) {
        res.status(401).send("No access");
    } else {
        next()
    }
}

export default admin;