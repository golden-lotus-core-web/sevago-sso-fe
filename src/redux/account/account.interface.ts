import type { User } from "../../apis/user/user.entities";
export type CURRENT_ACCESS =
  | "recruitment"
  | "project"
  | "propose"
  | "company-staff";
export interface GlobalAccountState {
  isLogin: boolean;
  user: User | null;
  accessToken: string;
  refreshToken: string;

  userUnitPositionId: string;
  sidebarCountObj: Record<string, number>;
  current_access?: CURRENT_ACCESS | undefined;
}
