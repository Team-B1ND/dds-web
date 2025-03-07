import { useCallback, useEffect, useMemo, useState } from "react";

export const DODAM_THEME_KEY = "Dodam_theme" as const;

export enum Dodam_ETheme {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<Dodam_ETheme>();

  const themeColor = useMemo((): Dodam_ETheme => {
    return currentTheme === Dodam_ETheme.DARK
      ? Dodam_ETheme.DARK
      : Dodam_ETheme.LIGHT;
  }, [currentTheme]);

  const handleTheme = useCallback((): void => {
    const switchTheme =
      currentTheme === Dodam_ETheme.DARK
        ? Dodam_ETheme.LIGHT
        : Dodam_ETheme.DARK;
    window.localStorage.setItem(DODAM_THEME_KEY, switchTheme);
    setCurrentTheme(switchTheme);
  }, [currentTheme, setCurrentTheme]);

  const getTheme = (): Dodam_ETheme => {
    const themeMode = window.localStorage.getItem(DODAM_THEME_KEY);

    if (typeof window !== "undefined" && themeMode === null) {
      const isDarkTheme: boolean = window.matchMedia(
        `(prefers-color-scheme: light)`
      ).matches;

      if (isDarkTheme) {
        return Dodam_ETheme.DARK;
      }
      return Dodam_ETheme.LIGHT;
    }

    const theme: Dodam_ETheme = themeMode as Dodam_ETheme;

    if (theme === Dodam_ETheme.DARK) {
      return Dodam_ETheme.DARK;
    }

    return Dodam_ETheme.LIGHT;
  };

  useEffect(() => {
    const handleThemeChange = (e: StorageEvent) => {
      if (e.key === DODAM_THEME_KEY) {
        setCurrentTheme(getTheme());
      }
    };

    window.addEventListener("storage", handleThemeChange);
    return () => {
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  return {
    themeColor,
    handleTheme,
  };
};
