import type { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from '../../../theme/ThemeContext';
import GlobalStyle from '../../../theme/globalStyles';
import loginRegexPattern from '../../../utils/loginRegexPatterns';
import Input from './Input';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    input: 'search',
    type: 'text',
    placeholder: 'Your login',
    regexPattern: loginRegexPattern.search,
  },
};
