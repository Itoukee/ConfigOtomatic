import { Document, ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

export interface IUser extends Partial<Document> {
  _id: ObjectId;
  email: string;
  password: string;
  superAdmin?: boolean;
  refresh_token?: string;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String },
    refresh_token: { type: String },
    password: {type : String},
    superAdmin: { type: Boolean },
  },
  {
    collection: "User",
    timestamps: true,
  }
);

const user = mongoose.model<IUser>("User", userSchema);
export default user;
