import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import App from "./App.tsx";
import { getAntdTheme } from "./shared/lib/theme.ts";
import { store, useAppSelector } from "./app/providers";
import { selectEffectiveTheme } from "./entities/theme";
import { ThemeEffects } from "./features/theme-switcher";
import "antd/dist/reset.css";
import "./index.css";

export const ThemedApp = () => {
  const effectiveTheme = useAppSelector(selectEffectiveTheme);

  return (
    <ConfigProvider theme={getAntdTheme(effectiveTheme)}>
      <ThemeEffects />
      <App />
    </ConfigProvider>
  );
};

// App entry point
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  </StrictMode>
);
