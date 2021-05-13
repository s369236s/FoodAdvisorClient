import axios from "axios";
import { SERVER_API_KEY } from "../../apiKey";

export const getUser = () => {
  let user_id = "";
  axios
    .get(`${SERVER_API_KEY}/auth/refresh_token.php`, { withCredentials: true })
    .then((res) => (user_id = res.data.id));
  return user_id;
};
