import type { Meta, StoryObj } from "@storybook/react";
import { DodamTextField } from "./DodamTextField";

const meta = {
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
    name: "textField",
    isError: false,
    value: "Input text",
    children: "Label text",
    onclick: () => alert("값 삭제"),
    onchange: () => alert("값 변경"),
    keydown: () => alert("함수 호출"),
  },
};
