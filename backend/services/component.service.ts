import { IComponent } from "../models/component";
import Component from "../models/component";

class ComponentService {
  static async addOne(component: IComponent) {
    return await Component.create(component);
  }
  static async deleteOne(componentId: IComponent["_id"]) {
    return await Component.findOneAndDelete({ _id: componentId });
  }
  static async getAll() {
    return await Component.find();
  }
  static async getOne(componentId: IComponent["_id"]) {
    return await Component.find({ _id: componentId });
  }
}
export default ComponentService;
