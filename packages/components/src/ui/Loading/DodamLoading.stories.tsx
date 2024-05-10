import type { Meta, StoryObj } from "@storybook/react";
import { DodamLoading } from "./DodamLoading";

const meta = {
  title: "ui/DodamLoading",
  component: DodamLoading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledLoading: Story = {
  args: {},
};
