import { useAuth, useSidebar } from "@/hooks";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  const { user } = useAuth();
  const { toggleSidebarOpen } = useSidebar();
  return (
    <>
      <h1 className="text-3xl">{`Dashboard Page ${user?.name}`}</h1>
      <Link to="/profile">profile</Link>
      <button onClick={toggleSidebarOpen}>open sidebar</button>
    </>
  );
}
