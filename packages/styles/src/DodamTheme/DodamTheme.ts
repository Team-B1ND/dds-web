import { DodamTheme } from "styled-components";
import { DodamColor } from "@dds-web/foundations";

export const DodamLightTheme: DodamTheme = Object.freeze({
  primary: DodamColor.blue,
  onPrimary: DodamColor.white,
  secondary: DodamColor.gray200,
  secondaryContainer: DodamColor.gray200,
  onSecondaryContainer: DodamColor.gray750,
  tertiary: DodamColor.gray650,
  error: DodamColor.red,
  onError: DodamColor.white,
  surface: "#F2F5F8",
  onSurface: DodamColor.gray900,
  surfaceContainer: DodamColor.white,
  surfaceContainerHigh: DodamColor.white,
  surfaceContainerLow: DodamColor.white,
  onSurfaceVariant: DodamColor.gray400,
  outline: DodamColor.gray300,
  outlineVariant: DodamColor.gray200,
});

export const DodamDarkTheme: DodamTheme = Object.freeze({
  primary: DodamColor.blue,
  onPrimary: DodamColor.white,
  secondary: DodamColor.gray750,
  secondaryContainer: DodamColor.gray750,
  onSecondaryContainer: DodamColor.gray350,
  tertiary: DodamColor.gray700,
  error: DodamColor.red,
  onError: DodamColor.white,
  surface: DodamColor.gray900,
  onSurface: DodamColor.white,
  surfaceContainer: DodamColor.gray850,
  surfaceContainerLow: DodamColor.gray650,
  surfaceContainerHigh: DodamColor.gray850,
  onSurfaceVariant: DodamColor.gray600,
  outline: DodamColor.gray700,
  outlineVariant: DodamColor.gray600,
});
