import type { Meta, StoryObj } from "@storybook/react";
import { DodamTitle } from "./DodamTitle";

const meta = {
  title: "ui/DodamTypograyphy/DodamTitle",
  component: DodamTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TitleLarge: Story = {
  args: {
    fontScale: "Large",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const TitleMedium: Story = {
  args: {
    fontScale: "Medium",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const TitleSmall: Story = {
  args: {
    fontScale: "Small",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};
