import type { Meta, StoryObj } from '@storybook/react';
import { DodamFilledButton } from './DodamFilledButton';
import { ChevronLeft } from '@dds-web/assets';
import React from 'react';

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
    attendants:{
      control: { type: 'radio' },
      options: ['left','right']
    }
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
    icon : <ChevronLeft size={16} color="staticWhite"/>,
    attendants: 'left',
  },
};
