import type { Meta, StoryObj } from "@storybook/react";
import { DodamLabel } from "./DodamLabel";

const meta = {
  title: "ui/DodamTypograyphy/DodamLabel",
  component: DodamLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LabelLarge: Story = {
  args: {
    scale: "Large",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const LabelMedium: Story = {
  args: {
    scale: "Medium",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const LabelSmall: Story = {
  args: {
    scale: "Small",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};
