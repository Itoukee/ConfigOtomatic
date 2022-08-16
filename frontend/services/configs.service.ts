import {
  createConfig,
  editVisibility,
  getConfigs,
  getOne,
} from "../api/configs";
import { IComponent, IConfig } from "../types/computerTypes";

export const ConfigService = {
  getAll: async (userId: string) => {
    try {
      const configs: IConfig[] = await getConfigs(userId);
      return configs;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  getOne: async (userId: string) => {
    try {
      const config: IConfig = await getOne(userId);
      return config;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  createOne: async (components: IComponent[], userId: string, name: string) => {
    try {
      await createConfig(components, userId, name);
    } catch (error) {
      throw error;
    }
  },
  updateVisibility: async (visibility: boolean, id: IConfig["_id"]) => {
    try {
      const newValues: Partial<IConfig> = { visibility: visibility };
      const config = await editVisibility(id, newValues);
      return config;
    } catch (error) {
      throw error;
    }
  },
};
