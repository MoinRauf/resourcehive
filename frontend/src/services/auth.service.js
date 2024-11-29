import axiosInstance from "@/config/axios";
export const AuthService = {
  login,
  signup,
};

async function login(data) {
  try {
    return axiosInstance.post("users/login", data);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function signup(data) {
  try {
    return axiosInstance.post("users/signup", data);
  } catch (error) {
    return Promise.reject(error);
  }
}
