import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { SYSTEM_MODULES } from "../common/constant/apps.constant";
import { AppCategory } from "../common/enums/app-category.enum";
import { GlobalReduxState } from "../redux/store.interface";
import { PAGE } from "../router/route.constant";

// Lấy danh sách apps được lọc theo category và user type
export const useApps = (tab: AppCategory) => {
  const userType = useSelector(
    (state: GlobalReduxState) => state.account.user?.type
  );

  const listApp = useMemo(() => {
    let filteredApps = SYSTEM_MODULES.filter((app) => {
      return app.allowUserTypes.includes(userType!);
    });

    if (tab !== AppCategory.ALL) {
      filteredApps = filteredApps.filter((app) => app.category === tab);
    }

    return filteredApps;
  }, [tab, userType]);

  return listApp;
};

export const useIsSystemMonitor = (): boolean => {
  const location = useLocation();
  const normalize = (p: string) => p.replace(/\/+$/, "");
  return normalize(location.pathname) === normalize(PAGE.DASHBOARD.path);
};

//Lấy tất cả apps mà user hiện tại có quyền truy cập.
export const useAllApps = () => {
  const userType = useSelector(
    (state: GlobalReduxState) => state.account.user?.type
  );

  const allApps = useMemo(() => {
    return SYSTEM_MODULES.filter((app) => {
      return app.allowUserTypes.includes(userType!);
    });
  }, [userType]);

  return allApps;
};

// Tìm sidebar item đang active dựa trên `current_access` trong Redux state.
export const useActiveSidebar = () => {
  const { user, current_access } = useSelector(
    (state: GlobalReduxState) => state.account
  );

  const activeSidebar = useMemo(() => {
    return SYSTEM_MODULES.find(
      (it) =>
        it.key === current_access &&
        user &&
        (it.allowUserTypes ? it.allowUserTypes.includes(user?.type) : true)
    );
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
