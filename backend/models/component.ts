import { Document, ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
import { ICaracteristic, IType } from "../types/configTypes";

export interface IComponent extends Partial<Document> {
  _id: ObjectId;
  type: IType;
  title: string;
  brand: string;
  image: string;
  rated: number;
  stock: number;
  price: number;
  caracteristics: ICaracteristic[];
}

const componentSchema = new Schema<IComponent>(
  {
    type: { type: String },
    title: { type: String },
    image: { type: String },
    rated: { type: Number },
    stock: { type: Number },
    caracteristics: { type: [Object] },
  },
  { collection: "Component", timestamps: true }
);

const Component = mongoose.model<IComponent>("Component", componentSchema);

export default Component;