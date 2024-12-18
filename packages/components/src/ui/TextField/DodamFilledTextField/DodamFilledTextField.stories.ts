import type { Meta, StoryObj } from "@storybook/react";
import { DodamFilledTextField } from "./DodamFilledTextField";

const meta = {
  title: "ui/DodamTextField/DodamFilledTextField",
  component: DodamFilledTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamFilledTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledFilledTextField: Story = {
  args: {
    type: "text",
    label: "Label",
    value: "Input Text",
    isError: false,
    placeholder: "여기에 텍스트를 입력하세요.",
    onchange: () => alert("값 변경"),
    onclickEye: () => alert("값 보기"),
    onclickXmark: () => alert("값 삭제"),
  },
};
