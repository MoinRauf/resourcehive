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

    setAuthLoading(true);

    try {
      const response = await AuthService.login(data);
      if (response.status === "success") {
        setUser(response?.data?.user);
        setToken(response?.token);
        navigate(navigationPath, { replace: true });
      }
    } catch (error) {
      const { error: ApiError } = axiosErrorHandler(error);
      if (ApiError?.message) {
        alert(ApiError?.message);
      }
    } finally {
      setAuthLoading(false);
    }
    // navigate("/dashboard");
  };

  const signup = async (data) => {
    setAuthLoading(true);
    try {
      const response = await AuthService.signup(data);
      if (response.status === "success") {
        navigate("/login");
        alert("Account created successfully please login to continue");
      }
    } catch (error) {
      const { error: ApiError } = axiosErrorHandler(error);

      if (ApiError?.message) {
        alert(ApiError?.message);
      }
    } finally {
      setAuthLoading(false);
    }

    // navigate("/login");
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
