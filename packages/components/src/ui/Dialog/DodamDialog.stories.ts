import type { Meta, StoryObj } from "@storybook/react";
import { DodamDialog } from "./DodamDialog";
import { css } from "styled-components";
import {DodamLightTheme} from "@dds-web/styles"
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
  color: ${({ theme }) => DodamLightTheme.primaryNormal};
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
  color: ${DodamLightTheme.staticWhite};
  background-color: ${ DodamLightTheme.primaryNormal};

`;

const DismissButton = css`
  color: ${DodamLightTheme.labelNetural};
  background-color: ${ DodamLightTheme.fillNormal};
  width: 50%;
  height: 50px;
  min-height: 50px;
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
