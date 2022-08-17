import { createComponent, getAllComponents } from "../api/components";
import { IComponent } from "../types/computerTypes";
import { IUser } from "../types/userType";

export const ComponentService = {
  getAll: async () => {
    try {
      const components: IComponent[] = await getAllComponents();
      return components;
    } catch (error) {
      throw error;
    }
  },
  createOne: async (component: Partial<IComponent>, user: IUser) => {
    try {
      await createComponent(component, user);
    } catch (error) {
      throw error;
    }
  },
};
