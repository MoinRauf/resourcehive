import { cn } from "@/utils";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Menu({ isToggled }) {
  return (
    <div className="flex-1 px-1 mt-2 overflow-auto">
      <MenuItem label="Dashboard" path="/dashboard" isToggled={isToggled} />
      <MenuItem label="Profile" path="/profile" isToggled={isToggled} />
    </div>
  );
}

function MenuItem({ label, path, isToggled }) {
  const pathname = window.location.pathname;
  const isActive = pathname === path;

  return (
    <>
      <Link onClick={() => alert("link cliked")} to={path}>
        <div
          className={cn(
            "  my-1 rounded-md h-8 p-1 flex  gap-2 items-center justify-center ",
            {
              "bg-slate-900 text-white": isActive,
            }
          )}
        >
          <div>
            <RiDashboardHorizontalFill />
          </div>
          <div
            className={cn("flex-1 text-sm  max-md:block", {
              hidden: isToggled,
            })}
          >
            <h3>{label}</h3>
          </div>
        </div>
      </Link>
    </>
  );
}
