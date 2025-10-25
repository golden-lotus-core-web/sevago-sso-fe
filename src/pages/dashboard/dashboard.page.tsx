import React, { type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

export interface DashboardPageProps {
  children?: ReactNode;
}

export const DashboardPage: React.FC<DashboardPageProps> = () => {
  return <Outlet />;
};
