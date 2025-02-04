import { DodamDivider } from "./DodamDivider";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ui/DodamDivider",
  component: DodamDivider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamDivider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledDodamDivider: Story = {
    args: {
      type: "Large",
    }
  };
