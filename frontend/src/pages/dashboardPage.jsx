import { useAuth } from "@/hooks";

export default function DashboardPage() {
  const { logout } = useAuth();
  return (
    <>
      <h1 className="text-3xl">DashBoard Page</h1>
      <button onClick={logout}>logout</button>
    </>
  );
}
