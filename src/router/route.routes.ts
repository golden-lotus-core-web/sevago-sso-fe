import type { Route } from "../common/interfaces/route.interface";
import { AuthLayout } from "../layouts/auth.layout";
import { DefaultLayout } from "../layouts/default.layout";
import { AuthPage } from "../pages/auth/auth.page";
import { DashboardPage } from "../pages/dashboard/dashboard.page";
import { SystemMonitorScreen } from "../pages/dashboard/screen/system-monitor/system-monitor.screen";
import { ErrorPage } from "../pages/error/error.page";
import { NotFoundPage } from "../pages/not-found/not-found.page";
import { PAGE } from "./route.constant";

export const routes: Route[] = [
  { ...PAGE.AUTH, element: AuthPage, layout: AuthLayout },
  { ...PAGE.NOT_FOUND, element: NotFoundPage, layout: DefaultLayout },
  { ...PAGE.ERROR, element: ErrorPage, layout: DefaultLayout },
  // PROTECTED
  {
    ...PAGE.DASHBOARD,
    element: DashboardPage,
    layout: DefaultLayout,
    children: [{ ...PAGE.DASHBOARD, element: SystemMonitorScreen }],
  },
];
