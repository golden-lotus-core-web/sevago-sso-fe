import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { STYLE } from "../../../../../common/constant";
import { AppModule } from "../../../../../common/enums/app-category.enum";
import { GlobalReduxState } from "../../../../../redux/store.interface";
import { SidebarContext } from "../sidebar-context/sidebar.context";

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeExpandMenu, setActiveExpandMenu] = useState<AppModule[] | null>(
    null
  );
  const { current_access } = useSelector(
    (state: GlobalReduxState) => state.account
  );

  useEffect(() => {
    // Reset activeExpandMenu khi current_access thay đổi
    setActiveExpandMenu(null);
  }, [current_access]);

  const sidebarWidth = activeExpandMenu
    ? isCollapsed
      ? STYLE.WIDTH_COLLAPSE + STYLE.WIDTH_SIDEBAR_EXPAND
      : STYLE.WIDTH_SIDEBAR + STYLE.WIDTH_SIDEBAR_EXPAND
    : isCollapsed
    ? STYLE.WIDTH_COLLAPSE
    : STYLE.WIDTH_SIDEBAR;

  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        setIsCollapsed,
        activeExpandMenu,
        setActiveExpandMenu,
        sidebarWidth: `${sidebarWidth}px`,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
