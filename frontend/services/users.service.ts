import { login, register } from "../api/user";
import { IUser } from "../types/userType";

export const UserService = {
  login: async (email: string, password: string) => {
    try {
      const user = await login({ email: email, password: password });
      return user as IUser;
    } catch (error) {
      throw error;
    }
  },
  register: async (email: string, password: string) => {
    try {
      const user = await register({ email: email, password: password });
      return user as IUser;
    } catch (error) {
      throw error;
    }
  },
};
