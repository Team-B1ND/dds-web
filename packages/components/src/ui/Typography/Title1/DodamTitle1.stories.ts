import type { Meta, StoryObj } from "@storybook/react";
import { DodamTitle1 } from "./DodamTitle1";

const meta = {
  title: "ui/DodamTypograyphy/DodamTitle/Title1",
  component: DodamTitle1,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamTitle1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Title1Bold: Story = {
  args: {
    fontScale: "Bold",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const Title1Medium: Story = {
  args: {
    fontScale: "Medium",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const Title1Regular: Story = {
  args: {
    fontScale: "Regular",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};
