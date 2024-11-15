import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "@/hooks";
import { SideBar } from "@/components";

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
    <div className="flex h-screen w-screen max-md:min-h-screen gap-2 relative">
      <section>
        <SideBar />
      </section>
      <section className=" h-full overflow-auto flex-1  ">{outlet}</section>
    </div>
  );
}
