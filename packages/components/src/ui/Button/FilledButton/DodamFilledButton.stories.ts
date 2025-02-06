import type { Meta, StoryObj } from '@storybook/react';
import { DodamFilledButton } from './DodamFilledButton';

const meta = {
  title: 'ui/DodamButton/DodamFilledButton',
  component: DodamFilledButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['Small', 'Medium', 'Large'],
    },
    backgroundColorType: {
      control: { type: 'radio' },
      options: ['Primary', 'Secondary', 'Assisitive', 'Negative'],
    },
    textTheme: {
      control: { type: 'radio' },
      options: ['staticWhite', 'staticBlack', 'labelAlternative'],
    },
  },
} satisfies Meta<typeof DodamFilledButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledFilledButton: Story = {
  args: {
    text: 'svg 아이콘',
    width: 0,
    typography: ['Body1', 'Medium'],
    size: 'Large',
    enabled: false,
    backgroundColorType: 'Primary',
    textTheme: 'staticWhite',
  },
};
