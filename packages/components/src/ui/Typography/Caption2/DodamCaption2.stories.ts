import type { Meta, StoryObj } from "@storybook/react";
import { DodamCaption2 } from "./DodamCaption2";

const meta = {
  title: "ui/DodamTypograyphy/DodamCaption/Caption2",
  component: DodamCaption2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamCaption2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Caption2Bold: Story = {
  args: {
    fontScale: "Bold",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const Caption2Medium: Story = {
  args: {
    fontScale: "Medium",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const Caption2Regular: Story = {
  args: {
    fontScale: "Regular",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};
