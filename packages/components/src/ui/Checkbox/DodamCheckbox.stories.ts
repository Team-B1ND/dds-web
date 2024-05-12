import type { Meta, StoryObj } from "@storybook/react";
import { DodamCheckbox } from "./DodamCheckbox";

const meta = {
  title: "ui/DodamCheckbox",
  component: DodamCheckbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledDodamCheckbox: Story = {
  args: {},
};
