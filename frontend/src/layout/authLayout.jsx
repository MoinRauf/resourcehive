import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks";

export default function AuthLayout() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
