import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectEffectiveTheme, setSystemIsDark } from "../store/themeSlice";

/**
 * A component for tracking the system theme and setting the theme attribute in the DOM.
 * Does not render any UI, only handles side effects.
 */
const ThemeEffects = () => {
  const dispatch = useAppDispatch();
  const effectiveTheme = useAppSelector(selectEffectiveTheme);

  useEffect(() => {
    const darkModeQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!darkModeQuery) return;

    dispatch(setSystemIsDark(darkModeQuery.matches));

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      dispatch(setSystemIsDark(event.matches));
    };

    darkModeQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      darkModeQuery.removeEventListener("change", handleSystemThemeChange);
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.dataset.theme = effectiveTheme;
  }, [effectiveTheme]);

  return null;
};

export default ThemeEffects;
