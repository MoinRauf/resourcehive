import { createContext, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLocalStorage } from "@/hooks";
import { AuthService } from "@/services/auth.service";
import { axiosErrorHandler } from "@/config/errorHandler";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);
  const [token, setToken] = useLocalStorage("token", null);
  const [authLoading, setAuthLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    const redirectParam = searchParams.get("redirect_to");
    const navigationPath = redirectParam ?? "/dashboard";
    const dummyUser = {
      userName: "john doe",
      email: data.email,
    };
    const dummyToken = "jdskfjskljfklsdjfkljsdfsd";
    setAuthLoading(true);

    setTimeout(() => {
      setUser(dummyUser);
      setToken(dummyToken);
      // navigate("/dashboard");
      setAuthLoading(false);
      navigate(navigationPath);
    }, 3000);
    // try {
    //   const response = await AuthService.login(data);
    //   console.log("🚀 ~ login ~ response:", response);
    //   if (response) {
    //     console.log("🚀 ~ login ~ response:", response);
    //   }
    // } catch (error) {
    //   const { error: ApiError } = axiosErrorHandler(error);
    //   console.log("🚀 ~ login ~ ApiError:", ApiError);
    // }
    // navigate("/dashboard");
  };

  const signup = async (data) => {
    try {
      const response = await AuthService.signup(data);
      if (response) {
        console.log("🚀 ~ signup ~ response:", response);
      }
    } catch (error) {
      const { error: ApiError } = axiosErrorHandler(error);
    }
    //  setUser(data);
    navigate("/login");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    setToken(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      signup,
      authLoading,
      token,
    }),
    [user, authLoading, token]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
