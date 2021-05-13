import axios from "axios";
import { SERVER_API_KEY } from "../../apiKey";

let user_id = "";

export const setUser = (s: string) => {
  user_id = s;
};

export const getUser = () => {
  return user_id;
};
