import axios from "axios";
import { API_URL } from "../config";
import { useAppSelector } from "../stores/config";
import { RootState } from "../stores/useStore";

const backend = axios.create({
  baseURL: `${API_URL["dev"]}`,
});

export { backend };
