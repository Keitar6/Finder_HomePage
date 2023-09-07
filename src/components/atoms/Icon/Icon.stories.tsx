import { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from '../../../theme/ThemeContext';
import GlobalStyle from '../../../theme/globalStyles';
import { colorNames } from '../../../theme/theme.types';
import Icon from './Icon';
import { iconsNames } from './icon.types';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    color: 'text',
    size: 40,
  },
  argTypes: {
    name: {
      options: iconsNames,
      description: 'Icon name',
      control: { type: 'select' },
      table: {
        type: {
          summary: `Variants: ${iconsNames.toString().replaceAll(',', ' | ')}`,
        },
      },
    },
    size: {
      description: 'Icon size',
      defaultValue: 16,
      table: {
        defaultValue: { summary: '16' },
      },
      control: { type: 'range', min: 16, max: 68, step: 2 },
    },
    color: {
      description: 'Color of the icon',
      options: colorNames,
      defaultValue: 'default',
      control: 'select',
      table: {
        type: {
          summary: colorNames.toString().replaceAll(',', ' | '),
        },
        defaultValue: { summary: 'default' },
      },
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
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DownloadIcon: Story = {
  args: {
    name: 'download',
  },
};
