import type { Meta, StoryObj } from "@storybook/react";
import { DodamDialog } from "./DodamDialog";
import { css } from "styled-components";

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

const AlertText = css`
  cursor: pointer;
  padding: 8px 12px;
  color: ${({ theme }) => theme.primary};
`;

export const AlertDialog: Story = {
  args: {
    title: "제목을 입력해주세요",
    text: "본문을 입력해주세요",

    type: {
      dialog: "ALERT",
      close: {
        content: "닫기",
        onClick: () => window.alert("닫기"),
        style: AlertText,
      },
    },
  },
};

const StyledButton = css`
  width: 50%;
  height: 50px;
  min-height: 50px;
`;

const DismissButton = css`
  color: ${({ theme }) => theme.onSurface};
  background-color: ${({ theme }) => theme.secondaryContainer};
  ${StyledButton}
`;

export const ConfirmDialog: Story = {
  args: {
    title: "제목을 입력해주세요.",
    text: "본문을 입력해주세요",

    type: {
      dialog: "CONFIRM",
      confirm: {
        content: "확인",
        onClick: () => window.alert("확인"),
        style: StyledButton,
      },
      dismiss: {
        content: "취소",
        onClick: () => window.alert("취소"),
        style: DismissButton,
      },
    },
  },
};
