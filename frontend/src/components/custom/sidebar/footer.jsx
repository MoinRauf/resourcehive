import { useAuth } from "@/hooks";
import { RiLogoutCircleLine } from "react-icons/ri";
import { CgChevronRight, CgChevronLeft } from "react-icons/cg";
import { cn } from "@/utils";

export default function Footer({ isCollapsed, toggleSidebarCollapsed }) {
  const { logout } = useAuth();

  return (
    <>
      <div
        onClick={logout}
        className=" my-1 rounded-md h-8 px-3  flex  gap-2 items-center justify-center  cursor-pointer   "
      >
        <div className="text-red-500">
          <RiLogoutCircleLine />
        </div>
        <div
          className={cn("flex-1 text-sm text-red-500 max-md:flex ", {
            hidden: isCollapsed,
          })}
        >
          <h3>Logout</h3>
        </div>
      </div>
      <div
        onClick={toggleSidebarCollapsed}
        className=" hidden md:flex my-1 rounded-md h-8 px-1 py-2   gap-2 items-center justify-center  cursor-pointer "
      >
        <div
          className={cn({
            "rotate-180 transition-transform ": isCollapsed,
          })}
        >
          <CgChevronLeft />
        </div>
      </div>
    </>
  );
}
