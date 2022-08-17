import axios from "axios";
import { API_URL } from "../config";
import { IUser } from "../types/userType";

const backend = axios.create({
  baseURL: `${API_URL["dev"]}`,
});

/* backend.interceptors.request.use(
  (config) => {
    const user: IUser | null = LocalStorage.get("user");
    if (user !== null) {
      config.headers = {
        Authorization: `Bearer ${user}`,
      };
      return config;
    }
  },
  (error) => {
    Promise.reject(error);
  }
); */

export { backend };
