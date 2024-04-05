import axios from "axios";

import { AppError } from "@utils/AppError";

const api = axios.create();
api.defaults.timeout = 5000;
api.defaults.baseURL = "https:...";

api.interceptors.request.use(
  (config) => {
    // const token = asyncStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(error);
    }
  }
);

export { api };
