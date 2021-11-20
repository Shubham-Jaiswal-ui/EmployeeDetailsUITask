import axios from "axios";
const URL = "http://www.mocky.io/v2/5d889c8a3300002c0ed7da42";

export const requestGetUser = () => {
  return axios
    .get(URL)
    .then((response) => response.data)
    .catch((error) => error);
};
