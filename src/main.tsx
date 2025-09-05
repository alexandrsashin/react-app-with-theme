import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import App from "./App.tsx";
import { getAntdTheme } from "./theme.ts";
import { store } from "./store";
import { useAppSelector } from "./store/hooks";
import { selectEffectiveTheme } from "./store/themeSlice";
import ThemeEffects from "./components/ThemeEffects";
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  </StrictMode>
);
