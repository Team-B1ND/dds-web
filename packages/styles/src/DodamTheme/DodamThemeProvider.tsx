import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { DodamLightTheme, DodamDarkTheme } from "./DodamTheme";

export interface DodamThemeProviderProps {
  children: ReactNode;
  theme: "LIGHT" | "DARK";
}

export const DodamThemeProvider = ({
  children,
  theme,
}: DodamThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme === "LIGHT" ? DodamLightTheme : DodamDarkTheme}>
      {children}
    </ThemeProvider>
  );
};
