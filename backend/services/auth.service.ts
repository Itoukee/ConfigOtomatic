import User from "../models/user";
class AuthService {
  static async createOne(user: {
    email: string;
    refresh_token: string;
    password: string;
  }) {
    return await User.create({
      email: user.email,
      password: user.password,
      superAdmin: false,
      refresh_token: user.refresh_token,
    });
  }
  static async findUser(mail: string) {
    return await User.findOne({ email: mail });
  }
}
export default AuthService;
