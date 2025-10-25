import React from 'react';
import { Navigate, Route as RouteDom } from 'react-router-dom';
import { PAGE } from './route.constant';
import { RouteType } from './route.enum';
import { UserType } from '../apis/user/user.enum';
import type { Route } from '../common/interfaces/route.interface';
import type { GlobalAccountState } from '../redux/account/account.interface';

export const renderRoutes = (routes: Route[], account: GlobalAccountState) =>
  routes.map((route) => {
    const { path, layout, element, type, allowUserTypes = [], children } = route;

    const Layout = layout || React.Fragment;
    let Element = element;

    // Redirect nếu đã login mà vào auth
    if (path === PAGE.AUTH.path && account.isLogin) Element = () => <Navigate to={PAGE.DASHBOARD.path} />;

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
      </RouteDom>
    );
  });
