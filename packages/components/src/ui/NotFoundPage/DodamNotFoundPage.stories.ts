import type { Meta, StoryObj } from "@storybook/react";
import { DodamNotFoundPage } from "./DodamNotFoundPage";
import { DodamContentButton } from "../Button";

const meta = {
  title: "ui/DodamNotFoundPage",
  component: DodamNotFoundPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DodamContentButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledNotFoundPage: Story = {
  args: {},
};
