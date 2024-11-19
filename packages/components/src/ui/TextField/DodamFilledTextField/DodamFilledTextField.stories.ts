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
  args: { status: "default", label: "Label", placeholder: "여기에 텍스트를 입력하세요." },
};
