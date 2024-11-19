import { useSidebar } from "@/hooks";

export default function ProfilePage() {
  const { toggleSidebarOpen } = useSidebar();
  return <button onClick={toggleSidebarOpen}>open Sidebar</button>;
}
