import type { Meta, StoryObj } from "@storybook/react";
import { DodamBody1 } from "./DodamBody1";

const meta = {
  title: "ui/DodamTypograyphy/DodamBody/Body1",
  component: DodamBody1,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamBody1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Body1Bold: Story = {
  args: {
    fontScale: "Bold",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const Body1Medium: Story = {
  args: {
    fontScale: "Medium",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const Body1Regular: Story = {
  args: {
    fontScale: "Regular",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};
