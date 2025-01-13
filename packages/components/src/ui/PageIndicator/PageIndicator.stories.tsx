import type { Meta, StoryObj } from "@storybook/react";
import { PageIndicator } from "./PageIndicator";
import React from "react";

const meta = {
  title: "ui/DodamPageIndicator",
  component: PageIndicator,
  tags: ["autodocs"],
} satisfies Meta<typeof PageIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;


export const PageIndicatorWithCases: Story = {
  args: {
    buttonSize: "Large",
    caseBy: {
      Page1: <div>첫 번째</div>,
      Page2: <div>두 번째</div>,
      Page3: <div>세 번째</div>,
    },
    defaultComponent: <div>기본 컴포넌트</div>,
  },
};
