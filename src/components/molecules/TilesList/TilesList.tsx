import Tile, { TileData } from '../../atoms/Tile/Tile';
import Typography from '../../atoms/Typography/Typography';
import * as Styled from './TilesList.styled';
import Grid from '@mui/material/Grid';

export const TILES_ARRAY: TileData[] = [
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder',
    iconName: 'bell',
  },
];

const TilesList = () => (
  <Styled.TilesContainer>
    <Styled.TilesDescription>
      <Typography variant='header2' color='headerText'>
        Join 2 million+ Australians finding better
      </Typography>
      <Typography variant='largeParagraph' color='textGrey'>
        {"Finder's team of 40+ experts will help you find the right choices in over 100 categories"}
      </Typography>
    </Styled.TilesDescription>
    <Grid
      container
      justifyContent='flex-start'
      spacing={{ xs: 0, sm: 0, md: 0 }}
      columns={{ xs: 9, sm: 15, md: 21 }}
      columnGap={2}
    >
      {TILES_ARRAY.map((tile) => (
        <Grid item key={tile.name} xs={3} sm={3} md={3}>
          <Tile data={tile} />
        </Grid>
      ))}
    </Grid>
  </Styled.TilesContainer>
);

export default TilesList;
