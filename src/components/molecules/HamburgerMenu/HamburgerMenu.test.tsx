import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test.utils';
import HamburgerMenu from './HamburgerMenu';

describe('HamburgerMenu', () => {
  afterEach(cleanup);
  describe('HamburgerMenu component', () => {
    const HamburgerMenuRender: any = () => renderWithProviders(<HamburgerMenu />, {});
    it('should render correctly', () => {
      const HamburgerMenu = HamburgerMenuRender();
      expect(HamburgerMenu).toMatchSnapshot();
    });
  });
});
