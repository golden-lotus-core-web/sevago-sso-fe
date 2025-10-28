import { createContext } from "react";
import { AppInfo } from "../../../common/constant/apps.data";

interface SidebarContextType {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  activeExpandMenu: AppInfo[] | null;
  setActiveExpandMenu: (menu: AppInfo[] | null) => void;
  sidebarWidth: string;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);
