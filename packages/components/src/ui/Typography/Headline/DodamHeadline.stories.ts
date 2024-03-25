import type { Meta, StoryObj } from "@storybook/react";
import { DodamHeadline } from "./DodamHeadline";

const meta = {
  title: "ui/Typograyphy/DodamHeadline",
  component: DodamHeadline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamHeadline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadlineLarge: Story = {
  args: {
    scale: "Large",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const HeadlineMedium: Story = {
  args: {
    scale: "Medium",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const HeadlineSmall: Story = {
  args: {
    scale: "Small",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};
