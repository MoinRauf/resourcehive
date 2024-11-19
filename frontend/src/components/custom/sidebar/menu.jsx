import { useAuth } from "@/hooks";
import { cn } from "@/utils";
import {
  RiDashboardHorizontalFill,
  RiLogoutCircleLine,
  RiUser3Fill,
  RiAddCircleFill,
  RiSettings2Fill,
  RiPieChart2Fill,
  RiToolsFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const MENU = [
  {
    id: 0,
    label: "Dashboard",
    path: "/dashboard",
    icon: <RiPieChart2Fill />,
  },
  {
    id: 1,
    label: "Profile",
    path: "/profile",
    icon: <RiUser3Fill />,
  },
  {
    id: 2,
    label: "Register Hospital",
    path: "/register_hospital",
    icon: <RiAddCircleFill />,
  },
  {
    id: 3,
    label: "Equipments",
    path: "/equipments",
    icon: <RiDashboardHorizontalFill />,
  },
  {
    id: 4,
    label: "Maintenance",
    path: "/maintenance",
    icon: <RiToolsFill />,
  },
  {
    id: 5,
    label: "Settings",
    path: "/settings",
    icon: <RiSettings2Fill />,
  },
  {
    id: 6,
    label: "Logout",
    icon: <RiLogoutCircleLine />,
  },
];

export default function Menu({ isCollapsed, toggleSidebarOpen }) {
  return (
    <div className="flex-1 px-1 mt-2 overflow-auto">
      {MENU.map((item) => (
        <MenuItem
          key={item.id}
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
  const { logout } = useAuth();
  const pathname = window.location.pathname;
  const isActive = pathname === path;
  const isLogoutMenuItem = label === "Logout";

  return (
    <>
      <Link
        onClick={() => {
          toggleSidebarOpen();
          if (isLogoutMenuItem) {
            logout();
          }
        }}
        to={path}
      >
        <div
          className={cn(
            "  my-1 rounded-md h-8 p-1 flex  gap-2 items-center justify-center ",
            {
              "bg-slate-900 text-white": isActive,
            },
            {
              "text-red-500": isLogoutMenuItem,
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
