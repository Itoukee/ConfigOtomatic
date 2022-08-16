import Config, { IConfig } from "../models/config";

class ConfigService {
  static async addOne(config: Partial<IConfig>) {
    return await Config.create(config);
  }
  static async getOne(id: IConfig["_id"]) {
    return await Config.findById(id);
  }
  static async getAll(userId: string) {
    return await Config.find({ userId: userId });
  }
  static async deleteOne(id: IConfig["_id"]) {
    return await Config.findByIdAndDelete(id);
  }
  static async patchOne(id: IConfig["_id"], newValues: Partial<IConfig>) {
    return await Config.findByIdAndUpdate(id, newValues);
  }
}
export default ConfigService;
