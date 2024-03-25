import type { Meta, StoryObj } from "@storybook/react";
import { DodamCircularProgress } from "./DodamCircularProgress";

const meta = {
  title: "ui/ProgressIndicator/DodamCircularProgress",
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
    gauge: 50,
  },
};
