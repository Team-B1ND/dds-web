import type { Meta, StoryObj } from '@storybook/react';
import { DodamContentButton } from './DodamContentButton';
import { css } from 'styled-components';

const meta = {
  title: 'ui/DodamButton/DodamContentButton',
  component: DodamContentButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DodamContentButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledContentButtonButton: Story = {
  args: {
    children: 'svg 아이콘',
    typography: ['Body1', 'Medium'],
    size: 'Large',
    enabled: false,
    backgroundColorType: 'Negative',
  },
};
