import { IComponent } from "../models/component";
import ComponentService from "../services/component.service";

const controller = {
  createOne: async (req, res, next) => {
    try {
      const component: IComponent = req.body.component;

      await ComponentService.addOne(component);
      return res.status(204).send(component);
    } catch (error) {
      next(error);
    }
  },
  deleteComponent: async (req, res, next) => {
    try {
      const componentId = req.params.id;
      const comp = await ComponentService.deleteOne(componentId);
      if (comp) return res.status(204).send();
      return res.status(404).send();
    } catch (error) {
      next(error);
    }
  },
  getComponents: async (req, res, next) => {
    try {
      const components = await ComponentService.getAll();
      return res.send(components);
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
