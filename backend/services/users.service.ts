import { IUser } from "../models/user";
import User from "../models/user";

class UserService {
  static async showAll() {
    return await User.find();
  }
  static async getUser(_id: IUser["_id"]) {
    return await User.findById(_id);
  }
  static async getUserSession(refresh_token: IUser["refresh_token"]) {
    return await User.findOne({refresh_token: refresh_token});
  }
  static async createUser(user: IUser) {
    return await User.create(user);
  }
  static async patchUser(userId: IUser["_id"], newValues: Partial<IUser>) {
    return await User.findByIdAndUpdate(userId, newValues);
  }
  static async deleteUser(userId: IUser["_id"]) {
    return await User.findByIdAndRemove(userId);
  }
}
export default UserService;
