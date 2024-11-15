import { useAuth } from "@/hooks";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  const { logout, user } = useAuth();
  return (
    <>
      <h1 className="text-3xl">{`Dashboard Page ${user?.name}`}</h1>
      <Link to="/profile">profile</Link>
    </>
  );
}
