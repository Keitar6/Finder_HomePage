import { TileData } from '../../atoms/Tile/Tile';

export const TILES_ARRAY: TileData[] = [
  {
    name: 'placeholder',
    iconName: 'bell',
  },
  {
    name: 'placeholder1',
    iconName: 'bell',
  },
  {
    name: 'placeholder2',
    iconName: 'bell',
  },
  {
    name: 'placeholder3',
    iconName: 'bell',
  },
  {
    name: 'placeholder4',
    iconName: 'bell',
  },
  {
    name: 'placeholder5',
    iconName: 'bell',
  },
  {
    name: 'placeholder6',
    iconName: 'bell',
  },
  {
    name: 'placeholder7',
    iconName: 'bell',
  },
  {
    name: 'placeholder8',
    iconName: 'bell',
  },
  {
    name: 'placeholder9',
    iconName: 'bell',
  },
  {
    name: 'placeholder10',
    iconName: 'bell',
  },
  {
    name: 'placeholder11',
    iconName: 'bell',
  },
  {
    name: 'placeholder12',
    iconName: 'bell',
  },
  {
    name: 'placeholder13',
    iconName: 'bell',
  },
  {
    name: 'placeholder14',
    iconName: 'bell',
  },
  {
    name: 'placeholder15',
    iconName: 'bell',
  },
  {
    name: 'placeholder16',
    iconName: 'bell',
  },
  {
    name: 'placeholder17',
    iconName: 'bell',
  },
  {
    name: 'placeholder18',
    iconName: 'bell',
  },
  {
    name: 'placeholder19',
    iconName: 'bell',
  },
  {
    name: 'placeholder20',
    iconName: 'bell',
  },
  {
    name: 'placeholder21',
    iconName: 'bell',
  },
  {
    name: 'placeholder22',
    iconName: 'bell',
  },
  {
    name: 'placeholder23',
    iconName: 'bell',
  },
];

export const responsibilityObject = {
  spacing: { xs: 0, sm: 0, md: 0 },
  columns: {
    xs: 2,
    sm: 1,
    md: 1,
  },
  item: {
    xs: 1,
    sm: 1,
    md: 2,
  },
};

export const respoSwitcher = (windowDimensions: {
  width: number | null;
  height: number | null;
}) => {
  if (windowDimensions.width) {
    if (windowDimensions.width > 944) return 6;
    if (windowDimensions.width > 599) return 4;
    else return 6;
  } else return 6;
};
