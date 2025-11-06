import type { AppInfo } from "../../constant/apps.data";
import { App, APP_OBJ, APPS_ENV } from "../../constant/apps.data";

export enum Environment {
  DEVELOPMENT = "development",
  STAGING = "staging",
  PRODUCTION = "production",
}

const getAppEnvKey = (appKey: App): string | null => {
  const enumKey = Object.keys(App).find(
    (key) => App[key as keyof typeof App] === appKey
  );
  return enumKey || null;
};

export const getCurrentEnvironment = (): Environment => {
  const { hostname } = window.location;
  if (hostname.includes("dev.")) return Environment.DEVELOPMENT;
  if (hostname.includes("sta.")) return Environment.STAGING;
  return Environment.PRODUCTION;
};

export const getAppUrl = (app: AppInfo, env: Environment): string | null => {
  const environment = env || getCurrentEnvironment();
  const appKey = Object.keys(APP_OBJ).find(
    (key) => APP_OBJ[key as App].path === app.path
  ) as App | undefined;

  if (!appKey) return null;

  const envKey = getAppEnvKey(appKey);
  if (!envKey || !(envKey in APPS_ENV)) return null;

  const envConfig = APPS_ENV[envKey as keyof typeof APPS_ENV] as Record<
    string,
    string
  >;
  return envConfig[environment] || null;
};

export const getSsoUrl = (env: Environment): string =>
  APPS_ENV.SSO[env || getCurrentEnvironment()];
