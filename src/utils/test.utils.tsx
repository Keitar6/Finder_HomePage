import { PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import ThemeProvider from '../theme/ThemeContext';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialUrl?: string;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    initialUrl = '/',
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  const Wrapper = ({ children }: PropsWithChildren<object>): JSX.Element => (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  );

  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from '@testing-library/react';
