import { IUser } from "../models/user";
import User from "../models/user";

class UserService {
  static async showAll() {
    return await User.find();
  }
  static async getUser(_id: IUser["_id"]) {
    return await User.findById(_id);
  }
  static async createUser(user: IUser) {
    return await User.create(user);
  }
  static async patchUser(userId: IUser["_id"], newValues: Partial<IUser>) {
    return await User.findByIdAndUpdate({ _id: userId }, newValues);
  }
}
export default UserService;
