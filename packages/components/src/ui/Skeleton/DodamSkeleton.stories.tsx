import type { Meta, StoryObj } from "@storybook/react";
import { DodamSkeleton } from "./DodamSkeleton";

const meta = {
  title: "ui/DodamSkeleton",
  component: DodamSkeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledDodamSkeleton: Story = {
  args: {
    width: "100px",
    height: "100px",
  },
};
