import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "styled-components";
import {
  DodamGlobalStyles,
  DodamLightTheme,
  DodamDarkTheme,
} from "@dds-web/styles";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        LIGHT: DodamLightTheme,
        DARK: DodamDarkTheme,
      },
      defaultTheme: "LIGHT",
      Provider: ThemeProvider,
      GlobalStyles: DodamGlobalStyles,
    }),
  ],
};

export default preview;
