import type { Meta, StoryObj } from "@storybook/react";
import { DodamDatePicker, DatePickerProps } from "./DodamDatePicker";

const meta: Meta<typeof DodamDatePicker> = {
  title: "ui/DodamDatePicker",
  component: DodamDatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['entire','future']
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledDatePicker: Story = {
  args: {
    itemKey: "unique-key",
    width: 100,
    height: 40,
    value: "2024-11-12",
    onChange: (date: Date) => alert(date),
    title: "외출 일시",
    color: "black",
    type: "future",
  } as DatePickerProps,
};
