import type { Meta, StoryObj } from "@storybook/react";
import { DodamNavBar, ETheme } from "./navBar"; 
import { BrowserRouter } from "react-router-dom";
import React from "react";

const meta: Meta<typeof DodamNavBar> = {
  title: "ui/DodamNavBar",
  component: DodamNavBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DodamNavBar>;

export const StyledDodamNavBar: Story = {
  args: {
    location: "home",
    currentTheme: ETheme.LIGHT,
    handleTheme: () => console.log("Theme toggled"),
    logout:()=>alert("로그아웃 버튼"),
  },
  render: (args) => (
    <BrowserRouter>
      <DodamNavBar {...args} />
    </BrowserRouter>
  ),
};
