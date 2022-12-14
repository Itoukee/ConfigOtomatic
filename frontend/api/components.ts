import { IComponent } from "../types/computerTypes";
import { IUser } from "../types/userType";
import { backend } from "./config";

export const getAllComponents = async () =>
  (await backend.get("components/")).data;

export const createComponent = async (
  component: Partial<IComponent>,
  user: IUser
) => (await backend.post("admin/components/create", { component, user })).data;

export const deleteComp = async (id: string, user: IUser) =>
  (await backend.delete(`admin/components/${id}`, { data: { user } })).data;

export const editComp = async (
  id: string,
  component: Partial<IComponent>,
  user: IUser
) =>
  (await backend.patch(`admin/components/${id}`, { data: { user, component } }))
    .data;
