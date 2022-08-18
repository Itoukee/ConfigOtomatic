import {
  createComponent,
  deleteComp,
  editComp,
  getAllComponents,
} from "../api/components";
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
      const comp = await createComponent(component, user);
      return comp;
    } catch (error) {
      throw error;
    }
  },
  editOne: async (component: Partial<IComponent>, user: IUser) => {
    try {
      if (component._id) {
        const comp = await editComp(component._id, component, user);
        return comp;
      }
      return;
    } catch (error) {
      throw error;
    }
  },

  deleteOne: async (id: string, user: IUser) => {
    try {
      await deleteComp(id, user);
      return;
    } catch (error) {
      throw error;
    }
  },
};
