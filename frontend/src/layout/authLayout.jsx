import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks";
import { Link } from "react-router-dom";

export default function AuthLayout() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <Outlet />
    </div>
  );
}
