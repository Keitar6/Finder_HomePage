import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test.utils';
import NotificationCard from './NotificationCard';
import { NotificationsMock } from '../../../contexts/GeneralContext';

describe('NotificationCard', () => {
  afterEach(cleanup);
  describe('NotificationCard component', () => {
    const NotificationCardRender: any = () =>
      renderWithProviders(<NotificationCard data={NotificationsMock[0]} />, {});
    it('should render correctly', () => {
      const NotificationCard = NotificationCardRender();
      expect(NotificationCard).toMatchSnapshot();
    });
  });
});
