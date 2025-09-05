import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/providers";

export type Theme = "light" | "dark" | "system";

const THEME_STORAGE_KEY = "theme-preference";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "system";
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  return storedTheme ?? "system";
};

const getSystemIsDark = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
};

interface ThemeState {
  selectedTheme: Theme;
  isSystemDark: boolean;
}

const initialState: ThemeState = {
  selectedTheme: getInitialTheme(),
  isSystemDark: getSystemIsDark(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.selectedTheme = action.payload;
      localStorage.setItem(THEME_STORAGE_KEY, action.payload);
    },
    setSystemIsDark: (state, action: PayloadAction<boolean>) => {
      state.isSystemDark = action.payload;
    },
  },
});

export const { setTheme, setSystemIsDark } = themeSlice.actions;

export const selectSelectedTheme = (state: RootState) =>
  state.theme.selectedTheme;
export const selectIsSystemDark = (state: RootState) =>
  state.theme.isSystemDark;
export const selectEffectiveTheme = (state: RootState): "light" | "dark" => {
  const { selectedTheme, isSystemDark } = state.theme;
  return selectedTheme === "system"
    ? isSystemDark
      ? "dark"
      : "light"
    : selectedTheme;
};

export const themeReducer = themeSlice.reducer;
