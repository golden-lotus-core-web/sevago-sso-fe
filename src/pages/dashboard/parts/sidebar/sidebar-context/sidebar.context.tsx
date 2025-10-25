import { createContext } from "react";
import { AppModule } from "../../../../../common/enums/app-category.enum";

interface SidebarContextType {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  activeExpandMenu: AppModule[] | null;
  setActiveExpandMenu: (menu: AppModule[] | null) => void;
  sidebarWidth: string;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);
