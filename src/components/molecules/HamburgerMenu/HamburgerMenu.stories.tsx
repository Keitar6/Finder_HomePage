import { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from '../../../theme/globalStyles';
import ThemeProvider from '../../../theme/ThemeContext';
import HamburgerMenu from './HamburgerMenu';

const meta = {
  title: 'Molecules/HamburgerMenu',
  component: HamburgerMenu,
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
} satisfies Meta<typeof HamburgerMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
