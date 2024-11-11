import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "@/hooks";

export default function ProtectedLayout() {
  const { user } = useAuth();
  const outlet = useOutlet();

  const redirectedPath = window?.location?.pathname;
  const path = redirectedPath
    ? `/login?redirect_to=${redirectedPath}`
    : "/login";
  if (!user) {
    return <Navigate to={path} />;
  }

  return (
    <div>
      <nav>
        <Link to="/profile">Profile</Link>
      </nav>
      {outlet}
    </div>
  );
}
