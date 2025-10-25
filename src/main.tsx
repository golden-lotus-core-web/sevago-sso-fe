import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "./hooks/use-snackbar.hook";
import { persistor, store } from "./redux";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
