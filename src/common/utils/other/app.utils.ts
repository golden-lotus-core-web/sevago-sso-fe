export enum Environment {
  DEVELOP = "develop",
  STAGING = "staging",
  PRODUCTION = "production",
}
export const getCurrentEnvironment = (): Environment => {
  const { hostname } = window.location;
  if (hostname.includes("dev.")) return Environment.DEVELOP;
  if (hostname.includes("sta.")) return Environment.STAGING;
  return Environment.PRODUCTION;
};
