import { AppConfig } from "@/constants";
import axios from "axios";

const controller = new AbortController();
console.log("this is api ", AppConfig.BASEURL);
const axiosInstance = axios.create({
  baseURL: AppConfig.BASEURL,
});
//This allows you to intercept the request before it is sent and alter headers or anyting else that is passed to the axios config.
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("🚀 API ===>:", config.url);
    const token = localStorage.getItem("token");
    const isInternetReachable = navigator.onLine;
    if (isInternetReachable === false) {
      config.signal = controller.signal;
    }

    const axiosConfig = config;

    if (token) {
      axiosConfig.headers = {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        ...axiosConfig.headers,
      };
    } else {
      axiosConfig.headers = {
        Accept: "application/json",
        ...axiosConfig.headers,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//This allows you to intercept the response and check the status and error messages and if ncessary reject the promise.
axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error);
    }

    if (error && error.message === "Network Error") {
      console.log("🚀 ~ error:", error);
      cancelRequest();
      return Promise.reject({ message: "Something went wrong" });
    }

    return error;
  }
);

export const cancelRequest = () => {
  controller.abort();
};

export default axiosInstance;
