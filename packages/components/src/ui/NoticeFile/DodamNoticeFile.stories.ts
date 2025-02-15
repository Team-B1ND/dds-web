import type { Meta, StoryObj } from "@storybook/react";
import { DodamNoticeFile,DodamNoticeFileProps } from "./DodamNoticeFile";


const meta: Meta<DodamNoticeFileProps> = {
  title: "ui/DodamNoticeFile",
  component: DodamNoticeFile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<DodamNoticeFileProps>;

export const Default: Story = {
  args: {
    filename: "B1nd인턴+여행계획서.pptx",
    onClick: () => alert("다운로드 버튼 클릭"),
  },
};
