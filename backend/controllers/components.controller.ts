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
      await ComponentService.deleteOne(req.params.id);
      return res.status(200).send("Component Deleted");
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
  getOneComponent: async (req, res, next) => {
    try {
      const component: IComponent | undefined = await ComponentService.getOne(req.params.id);
      return res.status(200).send(component);
    } catch(error) {
      next(error);
    }
  },
  patchOneComponent: async (req, res, next) => {
    try {
      if (!req.body.newValues) return res.status(400).send('Bad JSON request');
      await ComponentService.updateOne(req.params.id, req.bod.newValues);
      res.status(200).send("Component Patched")
    } catch(error) {
      next(error);
    }
  }
};

export default controller;
