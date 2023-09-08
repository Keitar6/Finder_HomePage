import { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from '../../../theme/globalStyles';
import ThemeProvider from '../../../theme/ThemeContext';
import CountriesDropdown from './CountriesDropdown';

const meta = {
  title: 'Molecules/CountriesDropdown',
  component: CountriesDropdown,
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
} satisfies Meta<typeof CountriesDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
