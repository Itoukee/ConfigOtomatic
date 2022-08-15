import { IComponent } from "../types/computerTypes";
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
