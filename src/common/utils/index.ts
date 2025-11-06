// Export utils
export * from "./other";
export * from "./string.utils";
export * from "./time.utils";

// Export as timeUtils object
import * as timeUtilsMethods from "./time.utils";
export const timeUtils = timeUtilsMethods;
