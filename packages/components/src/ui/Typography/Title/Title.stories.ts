import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";

const meta = {
  title: "ui/Typograyphy/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TitleLarge: Story = {
  args: {
    scale: "Large",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const TitleMedium: Story = {
  args: {
    scale: "Medium",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const TitleSmall: Story = {
  args: {
    scale: "Small",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};
