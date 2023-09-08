import { useWindowDimensions } from '../../../hooks/useWindowDimension';
import Tile, { TileData } from '../../atoms/Tile/Tile';
import Typography from '../../atoms/Typography/Typography';
import * as Styled from './TilesList.styled';
import Grid from '@mui/material/Grid';
import { TILES_ARRAY, respoSwitcher } from './TilesList.utils';
import Icon from '../../atoms/Icon/Icon';
import { useEffect, useState } from 'react';

const TilesList = () => {
  const screenDim = useWindowDimensions();
  let paginationLimiter = respoSwitcher(screenDim);
  const [paginatedArray, setPaginatedArray] = useState<TileData[]>([]);

  const showAllOfTheTiles = () => {
    if (paginationLimiter !== TILES_ARRAY.length) paginationLimiter = TILES_ARRAY.length;
    else paginationLimiter = respoSwitcher(screenDim);
  };

  useEffect(() => {
    setPaginatedArray(TILES_ARRAY.slice(0, paginationLimiter));
  }, [paginationLimiter]);

  return (
    <Styled.TilesContainer>
      <Styled.TilesDescription>
        <Typography variant='header2' color='headerText'>
          Join 2 million+ Australians finding better
        </Typography>
        <Typography variant='largeParagraph' color='textGrey'>
          {
            "Finder's team of 40+ experts will help you find the right choices in over 100 categories"
          }
        </Typography>
      </Styled.TilesDescription>
      <Grid
        container
        justifyContent='flex-start'
        columnGap={2}
        columns={{
          xs: 4,
          sm: 8.8,
          md: 13.5,
        }}
      >
        {paginatedArray.map((tile) => (
          <Grid
            key={tile.name}
            item
            xs={true}
            sm={paginationLimiter === TILES_ARRAY.length ? 2 : true}
            md={paginationLimiter === TILES_ARRAY.length ? 2 : true}
            sx={{ maxWidth: '100%', flexBasis: '48%' }}
          >
            <Tile data={tile} />
          </Grid>
        ))}
        <Styled.PaginationButton onClick={showAllOfTheTiles}>
          <Typography variant='paragraph' color='blueDark'>
            Show more categories
          </Typography>

          <Icon
            size={20}
            name={paginationLimiter !== TILES_ARRAY.length ? 'arrowDown' : 'arrowUp'}
          />
        </Styled.PaginationButton>
      </Grid>
    </Styled.TilesContainer>
  );
};

export default TilesList;
