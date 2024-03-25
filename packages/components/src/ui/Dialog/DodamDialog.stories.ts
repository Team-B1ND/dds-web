import type { Meta, StoryObj } from "@storybook/react";
import { DodamDialog } from "./DodamDialog";

const meta = {
  title: "ui/DodamDialog",
  component: DodamDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamDialog>;

export default meta;

type Story = StoryObj<typeof meta>;
