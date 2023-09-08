import styled from 'styled-components';
import initialTheme from '../../../theme/initialTheme';
import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';
import { IconName } from '../Icon/icon.types';

const Wrapper = styled.a`
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.2rem;
  height: 105px;
  border-color: ${initialTheme.palette.notificationGreyHover};
  border-radius: 16px;
  margin-bottom: 24px;
  &:hover {
    border-color: ${initialTheme.palette.blueDark};
  }
`;

export type TileData = { name: string; iconName: IconName };

type TileProps = { data: TileData };

const Tile = ({ data: { name, iconName } }: TileProps) => (
  <Wrapper href='/'>
    <Icon name={iconName} size={40} />
    <Typography variant='largeParagraph' color='blueDark'>
      {name}
    </Typography>
  </Wrapper>
);

export default Tile;
