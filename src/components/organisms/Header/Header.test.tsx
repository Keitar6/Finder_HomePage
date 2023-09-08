import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test.utils';
import Header from './Header';

describe('Header', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const snapshot = renderWithProviders(<Header />, {});

    expect(snapshot).toMatchSnapshot();
  });
});
