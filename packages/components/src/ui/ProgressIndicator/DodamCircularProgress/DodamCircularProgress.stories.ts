import type { Meta, StoryObj } from "@storybook/react";
import { DodamCircularProgress } from "./DodamCircularProgress";
import { DodamLightTheme } from "@dds-web/styles";

const meta = {
  title: "ui/DodamProgressIndicator/DodamCircularProgress",
  component: DodamCircularProgress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamCircularProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledCircularProgress: Story = {
  args: {
    size: 200,
    gauge: 20,
    strokeWidth: 30,
    color:{
      trail: DodamLightTheme.lineAlternative,
      path: DodamLightTheme.primaryNormal,
    },
    maxValue: 20,
  },
};
