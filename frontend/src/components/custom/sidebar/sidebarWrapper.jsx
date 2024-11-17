import { cn } from "@/utils";
import { VscClose } from "react-icons/vsc";

export default function SidebarWrapper({
  toggleSidebarOpen,
  isCollapsed,
  isOpen,
  children,
}) {
  return (
    <div
      onClick={toggleSidebarOpen}
      id="sidebar_wrapper "
      className={cn("  h-full  max-md:w-0  max-md:top-0  relative   ", {
        "max-md:absolute max-md:w-full max-md:animate-opacity bg-black/45 ":
          isOpen,
      })}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        id="sidebar_container "
        className={cn(
          "flex flex-col  w-[12rem] h-screen transition-all bg-white shadow-[12px_-3px_25px_-14px_rgba(142,_137,_144,_0.4)] max-md:w-[12rem]  max-md:-translate-x-[100%] ",
          { "w-[4rem]": isCollapsed },
          { "max-md:-translate-x-[0] delay-200 ": isOpen }
        )}
      >
        {children}
      </div>
      <div
        className={cn("hidden ", {
          "max-md:block absolute top-3 right-3": isOpen,
        })}
      >
        <VscClose className="text-[2rem]" />
      </div>
    </div>
  );
}
