import { IComponent } from "../models/component";
import ComponentService from "../services/component.service";

const controller = {
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
};

export default controller;
