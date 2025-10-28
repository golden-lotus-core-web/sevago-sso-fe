import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { APP_OBJ, AppGroup } from "../common/constant/apps.data";
import { GlobalReduxState } from "../redux/store.interface";
import { PAGE } from "../router/route.constant";

// Lấy danh sách apps được lọc theo group
export const useApps = (tab: AppGroup = AppGroup.ALL) => {
  const listApp = useMemo(() => {
    const source = Object.values(APP_OBJ);
    if (tab === AppGroup.ALL) return source;
    return source.filter((app) => app.group === tab);
  }, [tab]);
  return listApp;
};

export const useIsSystemMonitor = (): boolean => {
  const location = useLocation();
  const normalize = (p: string) => p.replace(/\/+$/, "");
  return normalize(location.pathname) === normalize(PAGE.DASHBOARD.path);
};

// Tìm sidebar item đang active dựa trên `current_access` trong Redux state.
export const useActiveSidebar = () => {
  const { user, current_access } = useSelector(
    (state: GlobalReduxState) => state.account
  );

  const activeSidebar = useMemo(() => {
    const source = Object.values(APP_OBJ);

    return source.find((it) => it.path === current_access && user);
  }, [current_access, user]);

  return activeSidebar;
};

// Hook để quản lý sidebar state (mở/đóng)
export const useSidebarState = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };
};
