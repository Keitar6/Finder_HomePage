import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test.utils';
import QRDropdownItem from './QRDropdownItem';

describe('QRDropdownItem', () => {
  afterEach(cleanup);
  describe('QRDropdownItem component', () => {

    const QRDropdownItemRender: any = () => renderWithProviders(<QRDropdownItem />, {});
    it('should render correctly', () => {
      const QRDropdownItem = QRDropdownItemRender();
      expect(QRDropdownItem).toMatchSnapshot();
    });
  });
});
