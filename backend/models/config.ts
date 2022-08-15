import { Document, ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
import { IComponent } from "./component";

export interface IConfig extends Partial<Document> {
  _id: ObjectId;
  name: string;
  userId: string;
  config: { price: number; components: Partial<IComponent[]> };
  price: number;
  socket?: string;
  visibility: boolean;
}

const componentSchema = new Schema<IConfig>(
  {
    name: { type: String },
    userId: { type: String },
    config: { type: Object },
    price: { type: Number },
    socket: { type: String },
    visibility: { type: Boolean },
  },
  { collection: "Config", timestamps: true }
);

const Config = mongoose.model<IConfig>("Config", componentSchema);

export default Config;
