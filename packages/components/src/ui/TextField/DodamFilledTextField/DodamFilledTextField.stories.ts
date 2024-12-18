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
    label: "Label",
    value: "Input Text",
    isError: false,
    placeholder: "여기에 텍스트를 입력하세요.",
    onchange: () => alert("함수 호출"),
    onclick: () => alert("값 삭제"),
  },
};
