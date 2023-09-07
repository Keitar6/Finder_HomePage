import { cleanup, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test.utils';
import Header from './Header';

describe('Header', () => {
  afterEach(cleanup);
  it('headers renders correctly for logged out user', () => {
    const snapshot = renderWithProviders(<Header />, {});

    expect(snapshot).toMatchSnapshot();
  });
  it('headers renders without dropdown for logged out user', () => {
    renderWithProviders(<Header />, {});
    const dropdown = screen.queryByTestId('dropdown');

    expect(dropdown).toBeFalsy();
  });
});
