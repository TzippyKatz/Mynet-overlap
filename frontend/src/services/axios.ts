import axios from "axios";
import { config } from "../config";

export const userAxios = axios.create({
  baseURL: config.server.user.url,
});

export const contentAxios = axios.create({
  baseURL: config.server.content.url,
});
