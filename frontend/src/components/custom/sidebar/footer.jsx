import { CgChevronLeft } from "react-icons/cg";
import { cn } from "@/utils";

export default function Footer({ isCollapsed, toggleSidebarCollapsed }) {
  return (
    <>
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
