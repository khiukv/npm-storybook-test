import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CustomButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: CustomButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    size: 'medium',
    label: 'Button text',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    variant: 'contained',
    size: 'medium',
    label: 'Button text',
  },
};

export const Large: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    size: 'large',
    label: 'Button text',
  },
};

export const Small: Story = {
  args: {
    color: 'primary',
    size: 'small',
    label: 'Button',
    variant: 'contained'
  },
};
