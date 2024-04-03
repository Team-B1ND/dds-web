import type { Meta, StoryObj } from "@storybook/react";
import { DodamContentButton } from "./DodamContentButton";

const meta = {
  title: "ui/DodamButton/DodamContentButton",
  component: DodamContentButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamContentButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledIconButton: Story = {
  args: {
    children: "svg 아이콘",
    typography: ["Body", "Medium"],
  },
};
