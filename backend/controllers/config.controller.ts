import { IComponent } from "../models/component";
import { IConfig } from "../models/config";
import ConfigService from "../services/config.service";

const controller = {
  createConfig: async (req, res, next) => {
    try {
      const userId: string | undefined = req.body.userId;
      const components: IComponent[] = req.body.components;

      if (!components || !userId) return res.send(400);

      let price = 0;
      components.map((comp) => (price += comp.price));

      const newConfig: Partial<IConfig> = {
        userId: userId,
        config: { components: components, price: price },
        visibility: false,
      };
      const config = await ConfigService.addOne(newConfig);

      return res.send(config);
    } catch (error) {
      next(error);
    }
  },
  getConfig: async (req, res, next) => {
    try {
      const id: IConfig["_id"] | undefined = req.params.id;
      if (!id) return res.send(400);
      const config = await ConfigService.getOne(id);
      return res.send(config);
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
