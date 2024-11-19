import type { Meta, StoryObj } from "@storybook/react";
import { DodamDatePicker, DatePickerProps } from "./DodamDatePicker"; 

const meta: Meta<typeof DodamDatePicker> = {
  title: "ui/DodamDatePicker",
  component: DodamDatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledDatePicker: Story = {
  args: {
    itemKey: "unique-key", 
    width: "100%",         
    height: "40px",        
    value: "2024-11-12",     
    onChange: (date: Date) => alert(date), 
    title: "외출 일시"
  } as DatePickerProps, 
};
