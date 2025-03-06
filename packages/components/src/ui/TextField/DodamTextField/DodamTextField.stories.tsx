import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { DodamTextField, DodamTextFieldProps } from "./DodamTextField";

const meta: Meta<DodamTextFieldProps> = {
  title: "ui/DodamTextField/DodamTextField",
  component: DodamTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledTextField: Story = {
  args: {
    id: "text",
    type: "text",
    name: "textField",
    isError: false,
    label: "Label text",
    value: "Input text",
    showIcon: true,
  },
};