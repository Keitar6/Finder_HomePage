import { renderWithProviders } from '../../../utils/test.utils';
import { cleanup } from '@testing-library/react';
import Icon, { IconProps } from './Icon';

describe('Icon', () => {
  const item = ({ name, size, color }: IconProps) =>
    renderWithProviders(<Icon name={name} size={size} color={color} />, {});
  afterEach(cleanup);

  it('should render correctly active download icon', () => {
    expect(
      item({
        name: 'download',
        size: 20,
        color: 'text',
      }),
    ).toMatchSnapshot();
  });
});
