import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test.utils';
import DownloadDropdown from './DownloadDropdown';

describe('DownloadDropdown', () => {
  afterEach(cleanup);
  describe('DownloadDropdown component', () => {
    const DownloadDropdownRender: any = () => renderWithProviders(<DownloadDropdown />, {});
    it('should render correctly', () => {
      const DownloadDropdown = DownloadDropdownRender();
      expect(DownloadDropdown).toMatchSnapshot();
    });
  });
});
