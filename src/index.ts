// Main entry point for Sevago SSO Frontend Library

// Export main app component
export {} from "./App";

// Export store and redux utilities
export type { GlobalReduxState } from "./redux/store.interface";
export { persistor, store } from "./redux/store.redux";

// Export API utilities
export * from "./apis/auth";
export * from "./apis/notification";
export * from "./apis/org-unit";
export * from "./apis/user";

// Export common utilities
export * from "./common/config";
export * from "./common/constant";
export * from "./common/enums";
export * from "./common/interfaces";
export * from "./common/utils";

export * from "./layouts";

// Export hooks
export { useApps } from "./hooks/use-apps.hook";
export { useSnackbar } from "./hooks/use-snackbar.hook";
export { useTagSelector } from "./hooks/use-tag-selector.hook";
export { useUpdateCurrentAccess } from "./hooks/use-update-current-access.hook";
export { useVersionCheck } from "./hooks/use-version-check.hook";

// Export router utilities
export { renderRoutes } from "./router/render.route";
export { PAGE as routeConstants } from "./router/route.constant";
export * from "./router/route.enum";
