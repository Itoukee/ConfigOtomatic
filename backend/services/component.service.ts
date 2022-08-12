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
    return await Component.findById(componentId);
  }
  static async getByValue(key: string, value: string) {
    return await Component.find({ key: value });
  }
  static async updateOne(
    componentId: IComponent["_id"],
    newValues: Partial<IComponent>
  ) {
    return await Component.findByIdAndUpdate(componentId, newValues);
  }
}
export default ComponentService;
