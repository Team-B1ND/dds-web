import type { Meta, StoryObj } from "@storybook/react";
import { DodamDatePicker } from "./DodamDatePicker";

const meta = {
  title: "ui/DodamDatePicker",
  component: DodamDatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamDatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledDatePicker: Story = {
  args: {},
};
