import type { Preview } from "@storybook/react";
import {DodamColor} from "@dds-web/foundations";

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
  },
};

export default preview;
