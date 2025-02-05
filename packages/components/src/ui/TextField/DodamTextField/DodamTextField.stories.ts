import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
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
    type: "text",
    name: "textField",
    isError: false,
    value: "Input text",
    children: "Label text",
    onClickXmark: () => alert("값 삭제"),
    onChange: () => alert("값 변경"),
    onKeyDown: (e) => alert(`${e.key}키 누름`),
  },
};
