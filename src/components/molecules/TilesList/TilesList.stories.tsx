import type { Meta, StoryObj } from '@storybook/react';
import TilesList from './TilesList';

const meta = {
  title: 'Molecules/TilesList',
  component: TilesList,
  tags: ['autodocs'],
  decorators: [(Story) => <>{Story()}</>],
} satisfies Meta<typeof TilesList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultTilesList: Story = {};
