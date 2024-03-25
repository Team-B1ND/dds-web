import type { Meta, StoryObj } from "@storybook/react";
import { DodamDialog } from "./DodamDialog";

const meta = {
  title: "ui/DodamDialog",
  component: DodamDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AlertDialog: Story = {
  args: {
    title: "제목을 입력해주세요",
    content: "본문을 입력해주세요",
    dialogType: "ALERT",
  },
};

export const ConfirmDialog: Story = {
  args: {
    title: "제목을 입력해주세요",
    content: "본문을 입력해주세요",
    dialogType: "CONFIRM",
  },
};
