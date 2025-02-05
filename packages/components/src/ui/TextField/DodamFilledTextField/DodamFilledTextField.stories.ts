import type { Meta, StoryObj } from '@storybook/react';
import { DodamFilledTextField, DodamFilledTextFieldProps } from './DodamFilledTextField';

const meta: Meta<DodamFilledTextFieldProps> = {
  title: 'ui/DodamTextField/DodamFilledTextField',
  component: DodamFilledTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StyledFilledTextField: Story = {
  args: {
    type: 'text',
    label: 'Label',
    value: 'Input Text',
    isError: false,
    placeholder: '여기에 텍스트를 입력하세요.',
    onChange: () => alert('값 변경'),
    onClickXmark: () => alert('값 삭제'),
  },
};
