import { createContext, useState } from "react";

export const SideBarContext = createContext();

export default function SidebarContextProvider({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebarCollapsed() {
    setIsCollapsed(!isCollapsed);
  }

  function toggleSidebarOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <SideBarContext.Provider
      value={{ isCollapsed, isOpen, toggleSidebarOpen, toggleSidebarCollapsed }}
    >
      {children}
    </SideBarContext.Provider>
  );
}
