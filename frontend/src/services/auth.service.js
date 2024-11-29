import axiosInstance from "@/config/axios";
export const AuthService = {
  login,
  signup,
};

async function login(data) {
  try {
    return axiosInstance.post("api/v1/users/login", data);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function signup(data) {
  try {
    return axiosInstance.post("api/v1/users/signup", data);
  } catch (error) {
    return Promise.reject(error);
  }
}
