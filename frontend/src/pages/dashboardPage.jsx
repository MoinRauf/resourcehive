import { useAuth } from "@/hooks";

export default function DashboardPage() {
  const { logout, user } = useAuth();
  return (
    <>
      <h1 className="text-3xl">{`Dashboard Page ${user?.name}`}</h1>
      <button onClick={logout}>logout</button>
    </>
  );
}
