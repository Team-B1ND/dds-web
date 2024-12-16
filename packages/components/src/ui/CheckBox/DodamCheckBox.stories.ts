import type { Meta, StoryObj } from "@storybook/react";
import { DodamCheckBox } from "./DodamCheckBox";

const meta: Meta<typeof DodamCheckBox> = {
  title: "ui/DodamCheckBox",
  component: DodamCheckBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckBox: Story = {
  args: {
    isDisabled: true,
    onclick: () => console.log("버튼 클릭"),
  },
};
