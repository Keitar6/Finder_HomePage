import { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from '../../../theme/globalStyles';
import ThemeProvider from '../../../theme/ThemeContext';
import DownloadDropdown from './DownloadDropdown';

const meta = {
  title: 'Molecules/DownloadDropdown',
  component: DownloadDropdown,
  tags: ['autodocs'],

  argTypes: {},
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
} satisfies Meta<typeof DownloadDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
