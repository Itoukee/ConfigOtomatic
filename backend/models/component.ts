import { Document, ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
import { IType } from "../types/configTypes";

export interface IComponent extends Partial<Document> {
  _id: ObjectId;
  type: IType;
  title: string;
  brand: string;
  image: string;
  rated: number;
  stock: number;
  price: number;
  socket?: string;
}

const componentSchema = new Schema<IComponent>(
  {
    type: { type: String },
    title: { type: String },
    image: { type: String },
    brand: { type: String },
    rated: { type: Number },
    price: { type: Number },
    stock: { type: Number },
    socket: { type: String },
  },
  { collection: "Component", timestamps: true }
);

const Component = mongoose.model<IComponent>("Component", componentSchema);

export default Component;
