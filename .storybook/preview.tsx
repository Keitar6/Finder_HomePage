import type { Preview } from '@storybook/react';
import ThemeProvider from '../src/theme/ThemeContext';
import GlobalStyle from '../src/theme/globalStyles';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
        expanded: true,
        backgrounds: {
          default: 'dark',
        },
      },
    },

    layout: 'centered',
    html: {
      root: '#storybook-root',
      highlighter: {
        showLineNumbers: false,
        wrapLines: true,
      },
      removeComments: /^\s*remove me\s*$/,
      removeEmptyComments: true,
      prettier: {
        tabWidth: 4,
        useTabs: false,
        htmlWhitespaceSensitivity: 'strict',
      },
    },
  },
};

export default preview;

export const decorators = [
  (
    Story: () =>
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | null
      | undefined,
  ) => (
    <ThemeProvider>
      <GlobalStyle />
      {Story()}
    </ThemeProvider>
  ),
];
