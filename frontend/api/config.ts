import axios from "axios";
import { API_URL } from "../config";

const backend = axios.create({
  baseURL: `${API_URL["dev"]}`,
});

export { backend };
