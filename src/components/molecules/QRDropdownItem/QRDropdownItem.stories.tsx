import { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from '../../../theme/globalStyles';
import ThemeProvider from '../../../theme/ThemeContext';
import QRDropdownItem from './QRDropdownItem';

const meta = {
  title: 'Molecules/QRDropdownItem',
  component: QRDropdownItem,
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
} satisfies Meta<typeof QRDropdownItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
