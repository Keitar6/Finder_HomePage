import { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from '../../../theme/globalStyles';
import ThemeProvider from '../../../theme/ThemeContext';
import Tile from './Tile';
import { TILES_ARRAY } from '../../molecules/TilesList/TilesList.utils';

const meta = {
  title: 'Molecules/Tile',
  component: Tile,
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Enter data',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
  parameters: {
    backgrounds: { default: 'light' },
  },
} satisfies Meta<typeof Tile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: TILES_ARRAY[0],
  },
};
