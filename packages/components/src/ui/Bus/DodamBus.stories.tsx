import {DodamBus} from "./DodamBus";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
	title: "ui/DodamBus",
	component: DodamBus,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof DodamBus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledDodamBus: Story = {
	args: {
		clickEvent: (e: number)=> alert(e),
		selectedSeat: [1, 2, 3],
		width: 285
	}
}