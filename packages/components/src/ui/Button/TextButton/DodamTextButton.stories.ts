import type { Meta, StoryObj } from "@storybook/react";
import { DodamTextButton } from "./DodamTextButton";

const meta = {
  title: "ui/DodamButton/DodamTextButton",
  component: DodamTextButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamTextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledTextButton: Story = {
  args: {},
};
