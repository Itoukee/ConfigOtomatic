import { IUser } from "../types/userType";
import { backend } from "./config";

export const login = async (user: Partial<IUser>) =>
  (await backend.post(`auth/login`, user)).data;

export const register = async (user: Partial<IUser>) =>
  (await backend.post("auth/create", user)).data;
