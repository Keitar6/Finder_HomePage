import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test.utils';
import CountriesDropdown from './CountriesDropdown';

describe('CountriesDropdown', () => {
  afterEach(cleanup);
  describe('CountriesDropdown component', () => {
    const CountriesDropdownRender: any = () => renderWithProviders(<CountriesDropdown />, {});
    it('should render correctly', () => {
      const CountriesDropdown = CountriesDropdownRender();
      expect(CountriesDropdown).toMatchSnapshot();
    });
  });
});
