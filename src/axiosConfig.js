// import axios from "axios";

// const $axios = axios.create({
//   baseURL: "http://localhost:4000/user",
// });
// $axios.interceptors.request.use((config) => {
//   const token = JSON.parse(localStorage.getItem("token")) || "";
//   console.log(token);
//   config.headers = {
//     Authorization: `JWT ${token.accessToken}`,
//   };
//   // console.log(config);

//   return config;
// });

// export default $axios;

export const instance = axios.create({
  baseURL: ` ${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.get("/getUsers");
