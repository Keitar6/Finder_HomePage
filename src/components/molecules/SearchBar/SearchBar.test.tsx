import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test.utils';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  afterEach(cleanup);
  describe('SearchBar component', () => {
    const placeholderText = 'Search...';

    const searchBarRender: any = () =>
      renderWithProviders(<SearchBar placeholder={placeholderText} />, {});
    it('should render correctly', () => {
      const searchBar = searchBarRender();
      expect(searchBar).toMatchSnapshot();
    });
  });
});
