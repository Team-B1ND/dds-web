import type { Meta, StoryObj } from "@storybook/react";
import { DodamPageIndicator } from "./DodamPageIndicator";

const meta = {
  title: "ui/DodamPageIndicator",
  component: DodamPageIndicator,
  tags: ["autodocs"],
} satisfies Meta<typeof DodamPageIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageIndicator: Story = {
  args: {
    num: 3,
    size: "Large",
    onClick: (idx) => console.log(idx),
  },
};
