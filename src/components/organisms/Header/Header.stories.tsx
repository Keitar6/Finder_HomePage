import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [(Story) => <>{Story()}</>],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultHeader: Story = {};
