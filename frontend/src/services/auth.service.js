import axiosInstance from "@/config/axios";
export const AuthService = {
  login,
  signup,
};

async function login(data) {
  try {
    return axiosInstance.post("/auth/login", data);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function signup(data) {
  try {
    return axiosInstance.post("/auth/signup", data);
  } catch (error) {
    return Promise.reject(error);
  }
}
