import { useSidebar } from "@/hooks";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Hamburger() {
  const { toggleSidebarOpen } = useSidebar();
  return (
    <>
      <div onClick={toggleSidebarOpen} className="md:hidden">
        <GiHamburgerMenu className="text-xl" />
      </div>
    </>
  );
}
