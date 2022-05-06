import axios from "axios";

const $axios = axios.create({
  baseURL: "http://localhost:4000/user",
});
$axios.interceptors.request.use((config) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || "";
  console.log(cart);
  config.headers = {
    Authorization: `JWT ${cart.accessToken}`,
  };
  console.log(config);

  return config;
});

export default $axios;

export const instance = axios.create({
  baseURL: ` ${process.env.REACT_APP_API}`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.get("/getUsers");
