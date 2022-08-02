import Config, { IConfig } from "../models/config";

class ConfigService {
  static async addOne(config: Partial<IConfig>) {
    return await Config.create(config);
  }
  static async getOne(id: IConfig["_id"]) {
    return await Config.findById(id);
  }
  static async deleteOne(id: IConfig["_id"]) {
    return await Config.findByIdAndDelete(id);
  }
}
export default ConfigService;
