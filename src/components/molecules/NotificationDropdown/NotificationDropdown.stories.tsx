import { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from '../../../theme/globalStyles';
import ThemeProvider from '../../../theme/ThemeContext';
import NotificationDropdown from './NotificationDropdown';

const meta = {
  title: 'Molecules/NotificationDropdown',
  component: NotificationDropdown,
  tags: ['autodocs'],
  args: { placeholder: 'Search flats...' },
  argTypes: {

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
} satisfies Meta<typeof NotificationDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
