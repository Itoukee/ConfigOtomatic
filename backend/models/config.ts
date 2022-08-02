import { Document, ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
import { IComponent } from "./component";

export interface IConfig extends Partial<Document> {
  _id: ObjectId;
  userId: string;
  config: { price: number; components: Partial<IComponent[]> };
  visibility: boolean;
}

const componentSchema = new Schema<IConfig>(
  {
    userId: { type: String },
    config: { type: Object },
    visibility: { type: Boolean },
  },
  { collection: "Config", timestamps: true }
);

const Config = mongoose.model<IConfig>("Config", componentSchema);

export default Config;
