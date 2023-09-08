import { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from '../../../theme/globalStyles';
import ThemeProvider from '../../../theme/ThemeContext';
import NotificationCard from './NotificationCard';
import { NotificationsMock } from '../../../contexts/GeneralContext';

const meta = {
  title: 'Molecules/NotificationCard',
  component: NotificationCard,
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
} satisfies Meta<typeof NotificationCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { data: NotificationsMock[0] },
};
