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

      if (comp) return res.status(204).send("Component deleted");
      return res.status(404).send();
    } catch (error) {
      next(error);
    }
  },
  getAllComponents: async (req, res, next) => {
    try {
      const components: IComponent[] = await ComponentService.getAll();
      return res.send(components);
    } catch (error) {
      next(error);
    }
  },

  getComponentByValue: async (req, res, next) => {
    try {
      const search: object = req.query;
      if (search === {}) return res.status(400).send("No queries");

      const key = Object.keys(search)[0];
      const value = search[key];

      if (key && value !== "") {
        const components = await ComponentService.getByValue(key, value);
        return res.send(components);
      }
    } catch (error) {
      next(error);
    }
  },

  getOneComponent: async (req, res, next) => {
    try {
      const componentId = req.params.id;
      const component: IComponent | undefined = await ComponentService.getOne(
        componentId
      );
      return res.status(200).send(component);
    } catch (error) {
      next(error);
    }
  },
  patchOneComponent: async (req, res, next) => {
    try {
      if (!req.body.newValues) return res.status(400).send("Bad JSON request");
      await ComponentService.updateOne(req.params.id, req.bod.newValues);
      res.status(200).send("Component Patched");
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
