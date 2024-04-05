import type { Meta, StoryObj } from "@storybook/react";
import { DodamTextField } from "./DodamTextField";

const meta = {
  title: "ui/DodamTextField",
  component: DodamTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledTextField: Story = {
  args: {},
};
