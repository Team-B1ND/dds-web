import type { Meta, StoryObj } from "@storybook/react";
import { DodamLinearProgress } from "./DodamLinearProgress";

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
      trail: "red",
      path: "blue",
    },
  },
};
