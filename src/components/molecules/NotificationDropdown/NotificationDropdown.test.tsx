import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test.utils';
import NotificationDropdown from './NotificationDropdown';

describe('NotificationDropdown', () => {
  afterEach(cleanup);
  describe('NotificationDropdown component', () => {

    const NotificationDropdownRender: any = () => renderWithProviders(<NotificationDropdown />, {});
    it('should render correctly', () => {
      const NotificationDropdown = NotificationDropdownRender();
      expect(NotificationDropdown).toMatchSnapshot();
    });
  });
});
