
import type { ElementType } from 'react';
import { UserType } from '../../apis/user/user.enum';
import { RouteType } from '../../router/route.enum';

export type Route = {
  path: string;
  element: ElementType;
  layout?: ElementType;
  children?: Route[];
  allowUserTypes: UserType[];
  type: RouteType;
};

export type RouteConstant = Omit<Route, 'element' | 'layout' | 'children'>;
