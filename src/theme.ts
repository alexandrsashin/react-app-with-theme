import type { ThemeConfig } from "antd";
import { theme } from "antd";

export const getAntdTheme = (mode: "light" | "dark"): ThemeConfig => ({
  algorithm: mode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
  token: {
    colorPrimary: "#1677ff",
    borderRadius: 8,
  },
});
