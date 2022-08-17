import UserService from "../services/users.service";
import ComponentService from "../services/component.service";
import { IComponent } from "../models/component";

const controller = {
    setAdmin: async (req, res, next) => {
        try {
          const user = await UserService.getUser(req.params.userId);
          if (!user) {return res.status(400).send("No user")}
          await UserService.patchUser(req.params.userId, {superAdmin: true});
          res.status(200).send("User set to admin")
        } catch(error) {
          next(error)
        }
      },
      disbandAdmin: async (req, res, next) => {
        try {
          const user = await UserService.getUser(req.params.userId);
          if (!user) {return res.status(400).send("No user")}
          await UserService.patchUser(req.params.userId, {superAdmin: false});
          res.status(200).send("User set to non-admin")
        } catch(error) {
          next(error)
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
      patchOneComponent: async (req, res, next) => {
        try {
          if (!req.body.newValues) return res.status(400).send("Bad JSON request");
          await ComponentService.updateOne(req.params.id, req.bod.newValues);
          res.status(200).send("Component Patched");
        } catch (error) {
          next(error);
        }
      },
      createOne: async (req, res, next) => {
        try {
          const component: IComponent = req.body.component;
    
          await ComponentService.addOne(component);
          return res.status(204).send(component);
        } catch (error) {
          next(error);
        }
      },
      deleteUser: async (req, res, next) => {
        try {
          if (!req.params.userId) return res.status(400).send("Bad JSON request");
          UserService.deleteUser(req.params.userId);
          res.status(200).send("User deleted");
        } catch (error) {
          next(error);
        }
      }
}

export default controller;