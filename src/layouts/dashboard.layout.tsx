
import React, { type ReactNode } from 'react'; 
import { useUpdateCurrentAccess } from '../hooks/use-update-current-access.hook';
import MonitorPart from '../pages/dashboard/parts/monitor.part';

export interface DashboardLayoutProps {
  children?: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {

  useUpdateCurrentAccess();
  return <MonitorPart>{children}</MonitorPart>;

};
