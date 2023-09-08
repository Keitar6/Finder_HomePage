import { renderWithProviders } from '../../../utils/test.utils';
import { cleanup } from '@testing-library/react';
import TilesList from './TilesList';

describe('TilesList', () => {
  const item = () => renderWithProviders(<TilesList />, {});

  afterEach(cleanup);
  it('renders correctly', () => {
    expect(item).toMatchSnapshot();
  });
});
