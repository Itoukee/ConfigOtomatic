import { getAllComponents } from "../api/components";
import { IComponent } from "../types/computerTypes";

export const ComponentService = {
  getAll: async () => {
    try {
      const components: IComponent[] = await getAllComponents();
      return components;
    } catch (error) {
      throw error;
    }
  },
};
