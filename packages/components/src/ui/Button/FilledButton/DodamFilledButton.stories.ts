import type { Meta, StoryObj } from "@storybook/react";
import { DodamFilledButton } from "./DodamFilledButton";

const meta = {
  title: "ui/DodamButton/DodamFilledButton",
  component: DodamFilledButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamFilledButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledFilledButton: Story = {
  args: {
    text: {
      content: "Filled button",
    },
  },
};
