import React from "react";
import { Navigate, Route as RouteDom } from "react-router-dom";
import { UserType } from "../apis/user/user.enum";
import { Route } from "../common/interfaces/route.interface";
import { GlobalAccountState } from "../redux/account/account.interface";
import { DASHBOARD_SCREEN, PAGE } from "./route.constant";
import { RouteType } from "./route.enum";

export const renderRoutes = (routes: Route[], account: GlobalAccountState) =>
  routes.map((route) => {
    const {
      path,
      layout,
      element,
      type,
      allowUserTypes = [],
      children,
    } = route;

    const Layout = layout || React.Fragment;
    let Element = element;

    // Redirect nếu đã login mà vào auth
    if (path === PAGE.AUTH.path && account.isLogin)
      Element = () => <Navigate to={PAGE.DASHBOARD.path} />;

    // Logic bảo vệ
    if (type === RouteType.PROTECTED)
      if (!account.isLogin) Element = () => <Navigate to={PAGE.AUTH.path} />;
      else if (
        allowUserTypes.length &&
        !allowUserTypes.includes(account.user!.type) &&
        account.user!.type !== UserType.ROOT
      )
        Element = () => <Navigate to={PAGE.ERROR.path} />;

    return (
      <RouteDom
        key={path}
        path={path}
        element={
          <Layout>
            <Element />
          </Layout>
        }
      >
        {children && renderRoutes(children, account)}

        {path === PAGE.DASHBOARD.path && (
          <RouteDom
            index
            element={
              <Navigate
                to={
                  PAGE.DASHBOARD.path +
                  ([UserType.User, UserType.C_B].includes(
                    account.user?.type || UserType.User
                  )
                    ? DASHBOARD_SCREEN.PROJECT_DASHBOARD.path
                    : PAGE.DASHBOARD.path)
                }
              />
            }
          />
        )}
      </RouteDom>
    );
  });
