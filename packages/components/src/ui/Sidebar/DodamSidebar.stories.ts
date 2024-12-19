import type { Meta, StoryObj } from "@storybook/react";
import { DodamSidebar ,DodamSidebarProps } from "./sidebars"; 

const meta: Meta<typeof DodamSidebar> = {
  title: "ui/DodamSidebar",
  component: DodamSidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledDodamSidebar: Story = {
  args: {
    onClick:()=>console.log("click"),
    onChange: ()=>console.log("change")
  } as DodamSidebarProps, 
};
