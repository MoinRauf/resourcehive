import { useSidebar } from "@/hooks";
import { PageHeader } from "@/components";

export default function ProfilePage() {
  const { toggleSidebarOpen } = useSidebar();

  return (
    <div>
      <PageHeader headerText={"Profile Page"} />
      
      {/*  <button onClick={toggleSidebarOpen}>
        Toggle Sidebar
      </button> */}
     
    </div>
  );
}
