import type { Meta, StoryObj } from "@storybook/react";
import { DodamIconButton } from "./DodamIconButton";

const meta = {
  title: "ui/DodamButton/DodamIconButton",
  component: DodamIconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledIconButton: Story = {
  args: {
    children: "",
  },
};
