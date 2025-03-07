import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "styled-components";
import {
  DodamGlobalStyles,
  DodamLightTheme,
  DodamDarkTheme,
} from "@dds-web/styles";
import { DodamColor } from "../../foundations/src";
const preview: Preview = {
  parameters: {
    backgrounds:{
      default: "defalut",
      values: [
        {
            name: "defalut",
            value:  DodamColor.netural99,
        }
    ],
    },
    controls: {
      matchers: {
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "LIGHT",
      values: [
        { name: "LIGHT", value: DodamLightTheme.backgroundNeutral },
        { name: "DARK", value: DodamDarkTheme.backgroundAlternative },
      ],
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
