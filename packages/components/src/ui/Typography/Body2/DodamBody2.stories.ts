import type { Meta, StoryObj } from "@storybook/react";
import { DodamBody2 } from "./DodamBody2";

const meta = {
  title: "ui/DodamTypograyphy/DodamBody/Body2",
  component: DodamBody2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamBody2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Body2Bold: Story = {
  args: {
    fontScale: "Bold",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const Body2Medium: Story = {
  args: {
    fontScale: "Medium",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const Body2Regular: Story = {
  args: {
    fontScale: "Regular",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};
