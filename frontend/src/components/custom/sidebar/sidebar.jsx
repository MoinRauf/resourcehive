import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";
import { useSidebar } from "@/hooks";
import SidebarWrapper from "./sidebarWrapper";

export default function SideBar() {
  const { isCollapsed, toggleSidebarCollapsed, isOpen, toggleSidebarOpen } =
    useSidebar();
  return (
    <SidebarWrapper
      isCollapsed={isCollapsed}
      isOpen={isOpen}
      toggleSidebarOpen={toggleSidebarOpen}
    >
      <Header isCollapsed={isCollapsed} />

      <Menu toggleSidebarOpen={toggleSidebarOpen} isCollapsed={isCollapsed} />
      <Footer
        isCollapsed={isCollapsed}
        toggleSidebarCollapsed={toggleSidebarCollapsed}
      />
    </SidebarWrapper>
  );
}
