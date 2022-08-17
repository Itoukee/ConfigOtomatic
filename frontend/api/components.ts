import { IComponent } from "../types/computerTypes";
import { IUser } from "../types/userType";
import { backend } from "./config";

export const getAllComponents = async () =>
  (await backend.get("components/")).data;

export const createComponent = async (component: IComponent, user: IUser) =>
  await backend.post("components/create", { component, user });
