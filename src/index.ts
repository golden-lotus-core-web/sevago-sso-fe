// Export main app component
export {} from "./App";

// Export store and redux utilities
export type { GlobalReduxState } from "./redux/store.interface";
export { persistor, store } from "./redux/store.redux";

export * from "./apis"; // Export API utilities
export * from "./common"; // Export common utilities
export * from "./hooks"; // Export custom hooks
export * from "./layouts"; // Export layout
export * from "./pages"; //Export pages
export * from "./router"; // Export router utilities

export * from "./components"; // Export common components
//Export redux : do bị trùng, chưa config được
// export * from "./redux";

// Keep pages alive for library bundling (avoid tree-shaking)
import "./pages";
