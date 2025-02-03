import type { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-components';
import { DodamFilledButton } from './DodamFilledButton';

const meta = {
  title: 'ui/DodamButton/DodamFilledButton',
  component: DodamFilledButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DodamFilledButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledFilledButton: Story = {
  args: {
    text: 'svg 아이콘',
    typography: ['Body1', 'Medium'],
    size: 'Small',
    enabled: false,
    backgroundColorType: 'Negative',
  },
};
