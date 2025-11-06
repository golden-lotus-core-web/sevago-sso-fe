export enum Environment {
  DEVELOPMENT = "development",
  STAGING = "staging",
  PRODUCTION = "production",
}
export const getCurrentEnvironment = (): Environment => {
  const { hostname } = window.location;
  if (hostname.includes("dev.")) return Environment.DEVELOPMENT;
  if (hostname.includes("sta.")) return Environment.STAGING;
  return Environment.PRODUCTION;
};
