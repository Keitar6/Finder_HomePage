import { cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test.utils';
import Tile from './Tile';
import { TILES_ARRAY } from '../../molecules/TilesList/TilesList.utils';

describe('Tile', () => {
  afterEach(cleanup);
  describe('Tile component', () => {
    const TileRender: any = () => renderWithProviders(<Tile data={TILES_ARRAY[0]} />, {});
    it('should render correctly', () => {
      const Tile = TileRender();
      expect(Tile).toMatchSnapshot();
    });
  });
});
