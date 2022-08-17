import { IComponent, IConfig } from "../types/computerTypes";
import { backend } from "./config";

export const createConfig = async (
  components: IComponent[],
  userId: string,
  name: string
) =>
  (
    await backend.post(`config/create/${userId}`, {
      components: components,
      name: name,
    })
  ).data;

export const getConfigs = async (userId: string) =>
  (await backend.get(`config/${userId}`)).data;

export const getOne = async (id: string) =>
  (await backend.get(`config/one/${id}`)).data;

export const editVisibility = async (id: string, newValues: Partial<IConfig>) =>
  (await backend.patch(`config/${id}`, newValues)).data;

export const deleteConfig = async (id: string) =>
  (await backend.delete(`config/${id}`)).data;
