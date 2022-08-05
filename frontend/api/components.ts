import { backend } from "./config";

export const getAllComponents = async () =>
  (await backend.get("components/")).data;
