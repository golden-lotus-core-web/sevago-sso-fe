import { UserType } from "../../apis/user/user.enum";

export enum AppCategory {
  ALL = "all",
  HRM = "hrm",
  WORKFLOW = "workflow",
  PLATFORM_INFO = "platform-info",
}

export enum AppType {
  SUBMENU = "submenu",
  EXPAND_MENU = "expand-menu",
}

export interface AppModule {
  key: string;
  title: string;
  caption: string;
  icon: string;
  path?: string;
  category: AppCategory;
  allowUserTypes: UserType[];
  type?: AppType;
  children?: AppModule[];
}
