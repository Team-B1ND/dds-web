import "styled-components";

declare module "styled-components" {
  export interface DodamTheme {
    primary: string;
    onPrimary: string;
    secondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    error: string;
    onError: string;
    surface: string;
    onSurface: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerLow: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
  }
}
