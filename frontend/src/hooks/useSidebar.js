import { SideBarContext } from "@/context/sidebarContext";
import { useContext } from "react";

export default function useSidebar() {
  return useContext(SideBarContext);
}
