import type { Meta, StoryObj } from "@storybook/react";
import { PageIndicator } from "./PageIndicator";

const meta = {
  title: "ui/DodamPageIndicator",
  component: PageIndicator,
  tags: ["autodocs"],
} satisfies Meta<typeof PageIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageIndicatorButton: Story = {
  args: {
    num: 3,
    buttonSize: "Large",
  }
}