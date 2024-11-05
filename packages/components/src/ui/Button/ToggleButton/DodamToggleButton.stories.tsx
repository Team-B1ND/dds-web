import type { Meta, StoryObj } from "@storybook/react";
import { DodamToggleButton } from "./DodamToggleButton";

const meta = {
  title: "ui/DodamButton/DodamToggleButton",
  component: DodamToggleButton,
  argTypes: {
    isAtv: {
      control: "boolean",
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamToggleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledToggleButton: Story = {
  args: {
    isAtv: false,
  },
};
