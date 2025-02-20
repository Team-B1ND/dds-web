import { Meta, StoryObj } from "@storybook/react";
import { DodamTag } from "./DodamTag";

const meta = {
  title: "ui/DodamTag",
  component: DodamTag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledTag: Story = {
  args: {
    text: "Text",
    color: "default",
  },
};
