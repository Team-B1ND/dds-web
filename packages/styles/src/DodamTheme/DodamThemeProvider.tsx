import React, { type ReactNode } from "react";
import { DodamTheme, ThemeProvider } from "styled-components";

export interface DodamThemeProviderProps {
  children: ReactNode;
  theme: DodamTheme;
}

export const DodamThemeProvider = ({
  children,
  theme,
}: DodamThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
