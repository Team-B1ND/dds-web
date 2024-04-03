import type { Meta, StoryObj } from "@storybook/react";
import { DodamBody } from "./DodamBody";

const meta = {
  title: "ui/DodamTypograyphy/DodamBody",
  component: DodamBody,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BodyLarge: Story = {
  args: {
    fontScale: "Large",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const BodyMedium: Story = {
  args: {
    fontScale: "Medium",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};

export const BodySmall: Story = {
  args: {
    fontScale: "Small",
    text: "도담도담은 학교에 다니는 학생과 교사에게 편리한 학교 생활을 제공합니다.",
  },
};
