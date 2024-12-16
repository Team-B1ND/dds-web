import type { Meta, StoryObj } from "@storybook/react";
import { DodamSegmentedButton } from "./DodamSegmentedButton";

const meta = {
  title: "ui/DodamButton/DodamSegmentedButton",
  component: DodamSegmentedButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamSegmentedButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledToggleButtonTwo: Story = {
  args: {
    num: 2,
    type: "block",
    data: [
      { text: "Label", isAtv: true },
      { text: "Label", isAtv: false },
    ],
    width: 380,
  },
};

export const StyledToggleButtonThree: Story = {
  args: {
    num: 3,
    type: "block",
    data: [
      { text: "Label", isAtv: true },
      { text: "Label", isAtv: false },
      { text: "Label", isAtv: false },
    ],
    width: 380,
  },
};

export const StyledToggleButtonFour: Story = {
  args: {
    num: 4,
    type: "block",
    data: [
      { text: "커밋", isAtv: true },
      { text: "레포지토리", isAtv: false },
      { text: "PR", isAtv: false },
      { text: "주간 기록", isAtv: false },
    ],
    width: 400,
  },
};

export const StyledToggleButtonFive: Story = {
  args: {
    num: 5,
    type: "block",
    data: [
      { text: "Label", isAtv: true },
      { text: "Label", isAtv: false },
      { text: "Label", isAtv: false },
      { text: "Label", isAtv: false },
      { text: "Label", isAtv: false },
    ],
    width: 380,
  },
};
