import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';
import ThemeProvider from '../../../theme/ThemeContext';
import GlobalFontsStyle from '../../../assets/fonts/fonts';

const meta = {
  title: 'Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalFontsStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 24,
  },
};
