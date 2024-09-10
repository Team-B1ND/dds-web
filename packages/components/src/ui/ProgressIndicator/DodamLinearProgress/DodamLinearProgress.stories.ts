import type { Meta, StoryObj } from "@storybook/react";
import { DodamLinearProgress } from "./DodamLinearProgress";
import { DodamLightTheme } from "@dds-web/styles";

const meta = {
  title: "ui/DodamProgressIndicator/DodamLinearProgress",
  component: DodamLinearProgress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamLinearProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledLinearProgress: Story = {
  args: {
    width: "233px",
    height: "14px",
    gauge: 50,

    color: {
      trail: DodamLightTheme.lineAlternative,
      path:  DodamLightTheme.primaryNormal,
    },
  },
};
