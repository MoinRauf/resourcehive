import { createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks";
import { AuthService } from "@/services/auth.service";
import { axiosErrorHandler } from "@/config/errorHandler";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    try {
      const response = await AuthService.login(data);
      console.log("🚀 ~ login ~ response:", response);
      if (response) {
        console.log("🚀 ~ login ~ response:", response);
      }
    } catch (error) {
      const { error: ApiError } = axiosErrorHandler(error);
      console.log("🚀 ~ login ~ ApiError:", ApiError);
    }

    navigate("/dashboard");
  };

  const signup = async (data) => {
    try {
      const response = await AuthService.signup(data);
      if (response) {
        console.log("🚀 ~ signup ~ response:", response);
      }
    } catch (error) {
      const { error: ApiError } = axiosErrorHandler(error);
      console.log("🚀 ~ signup ~ ApiError:", ApiError);
    }
    //  setUser(data);
    navigate("/login");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      signup,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
