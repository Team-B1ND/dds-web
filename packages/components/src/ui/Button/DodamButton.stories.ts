import type { Meta, StoryObj } from "@storybook/react";
import { DodamButton } from "./DodamButton";

const meta = {
  title: "ui/DodamButton",
  component: DodamButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isPrimary: true,
    label: "DodamButton",
  },
};

export const Secondary: Story = {
  args: {
    label: "DodamButton",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "DodamButton",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "DodamButton",
  },
};
