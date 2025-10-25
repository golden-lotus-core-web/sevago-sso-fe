// Export account redux
export * from "./account.action";
export * from "./account.interface";
export * from "./account.slice";

// Export all actions as ACTION_ACCOUNT object
import * as accountActions from "./account.action";
export const ACTION_ACCOUNT = accountActions;
