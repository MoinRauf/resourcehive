import { cn } from "@/utils";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const MENU = [
  {
    id: 0,
    label: "Dashboard",
    path: "/dashboard",
    icon: <RiDashboardHorizontalFill />,
  },
  {
    id: 1,
    label: "Profile",
    path: "/profile",
    icon: <RiDashboardHorizontalFill />,
  },
];

export default function Menu({ isCollapsed, toggleSidebarOpen }) {
  return (
    <div className="flex-1 px-1 mt-2 overflow-auto">
      {MENU.map((item) => (
        <MenuItem
          label={item.label}
          path={item.path}
          icon={item.icon}
          isCollapsed={isCollapsed}
          toggleSidebarOpen={toggleSidebarOpen}
        />
      ))}
    </div>
  );
}

function MenuItem({ label, path, isCollapsed, toggleSidebarOpen, icon }) {
  const pathname = window.location.pathname;
  const isActive = pathname === path;

  return (
    <>
      <Link onClick={toggleSidebarOpen} to={path}>
        <div
          className={cn(
            "  my-1 rounded-md h-8 p-1 flex  gap-2 items-center justify-center ",
            {
              "bg-slate-900 text-white": isActive,
            }
          )}
        >
          <div>{icon}</div>
          <div
            className={cn("flex-1 text-sm  max-md:block", {
              hidden: isCollapsed,
            })}
          >
            <h3>{label}</h3>
          </div>
        </div>
      </Link>
    </>
  );
}
