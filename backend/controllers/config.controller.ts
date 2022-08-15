import { IComponent } from "../models/component";
import { IConfig } from "../models/config";
import ConfigService from "../services/config.service";

const controller = {
  createConfig: async (req, res, next) => {
    try {
      const userId: string | undefined = req.params.userId;
      const components: IComponent[] | undefined = req.body.components;
      const name: string | undefined = req.body.name;

      if (!components || !userId)
        return res.status(400).send("Bad JSON request");

      let price = 0;
      components.map((comp) => (price += comp.price));

      const newConfig: Partial<IConfig> = {
        userId: userId,
        name: name || `${price}`,
        price: price,
        config: { components: components, price: price },
        visibility: false,
      };
      const config: IConfig | undefined = await ConfigService.addOne(newConfig);

      return res.status(201).send(config);
    } catch (error) {
      next(error);
    }
  },
  getConfigs: async (req, res, next) => {
    try {
      const config: IConfig[] | undefined = await ConfigService.getAll(
        req.params.id
      );
      if (!config) return res.status(400).send("No Config");
      return res.status(200).send(config);
    } catch (error) {
      next(error);
    }
  },

  getById: async (req, res, next) => {
    try {
      const config: IConfig | undefined = await ConfigService.getOne(
        req.params.id
      );
      if (!config) return res.status(400).send("No Config");
      return res.status(200).send(config);
    } catch (error) {
      next(error);
    }
  },
  updateConfig: async (req, res, next) => {
    try {
      if (!req.body.newValues) return res.status(400).send("Bad JSON Request");
      const config: IConfig | undefined = await ConfigService.getOne(
        req.params.id
      );
      if (!config) return res.status(400).send("No Config");
      await ConfigService.patchOne(req.params.id, req.body.newValues);
      res.status(200).send("Config Patched");
    } catch (error) {
      next(error);
    }
  },
  deleteConfig: async (req, res, next) => {
    try {
      await ConfigService.deleteOne(req.params.id);
      res.status(200).send("Config Deleted");
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
