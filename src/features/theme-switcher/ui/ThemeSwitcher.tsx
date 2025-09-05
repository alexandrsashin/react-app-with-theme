import { Space, Segmented } from "antd";
import { MoonFilled, SunFilled } from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "../../../app/providers";
import {
  selectSelectedTheme,
  setTheme,
  type Theme,
} from "../../../entities/theme";
import type { ReactNode } from "react";

type ThemeOption = {
  label: string;
  value: Theme;
  icon?: ReactNode;
};

const themeOptions: ThemeOption[] = [
  { label: "Light", value: "light", icon: <SunFilled /> },
  { label: "Dark", value: "dark", icon: <MoonFilled /> },
  { label: "System", value: "system" },
];

export const ThemeSwitcher = () => {
  const selectedTheme = useAppSelector(selectSelectedTheme);
  const dispatch = useAppDispatch();

  const handleThemeChange = (value: Theme) => {
    dispatch(setTheme(value));
  };

  return (
    <Space>
      <Segmented
        value={selectedTheme}
        onChange={(item) => handleThemeChange(item)}
        options={themeOptions}
      />
    </Space>
  );
};
