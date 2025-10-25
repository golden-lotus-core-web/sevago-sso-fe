import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLibrary = mode === "library";

  if (isLibrary) {
    return {
      plugins: [
        react(),
        dts({
          insertTypesEntry: true, // tự thêm field "types" vào package.json khi build
          outDir: "dist", // xuất file .d.ts vào thư mục dist
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, "src/index.ts"),
          name: "SevagoSSO",
          fileName: (format) => `index.${format === "es" ? "esm" : format}.js`,
          formats: ["es", "cjs"],
        },
        rollupOptions: {
          external: [
            "react",
            "react-dom",
            "@emotion/react",
            "@emotion/styled",
            "@mui/material",
            "@mui/system",
            "@reduxjs/toolkit",
            "react-redux",
            "react-router-dom",
            "redux-persist",
          ],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
              "@emotion/react": "EmotionReact",
              "@emotion/styled": "EmotionStyled",
              "@mui/material": "MaterialUI",
              "@mui/system": "MaterialUISystem",
              "@reduxjs/toolkit": "ReduxToolkit",
              "react-redux": "ReactRedux",
              "react-router-dom": "ReactRouterDOM",
              "redux-persist": "ReduxPersist",
            },
          },
        },
        sourcemap: true,
        minify: false,
      },
    };
  }

  return {
    plugins: [react()],
    server: {
      port: 6003,
      strictPort: true, // Force sử dụng port này, không tự động tìm port khác
      host: true, // Cho phép truy cập từ bên ngoài
      open: true, // Tự động mở browser
    },
    preview: {
      port: 6003,
      host: true,
    },
  };
});
