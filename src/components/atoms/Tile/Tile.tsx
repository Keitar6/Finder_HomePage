import styled from 'styled-components';
import initialTheme from '../../../theme/initialTheme';
import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';
import { IconName } from '../Icon/icon.types';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.2rem;

  height: 105px;
  border: 1px solid ${initialTheme.palette.notificationGreyHover};
  border-radius: 16px;
  margin-bottom: 24px;

  flex-grow: 1;
`;

export type TileData = { name: string; iconName: IconName };

type TileProps = { data: TileData };

const Tile = ({ data: { name, iconName } }: TileProps) => (
  <Wrapper>
    <Icon name={iconName} />
    <Typography variant='largeParagraph' color='blueDark'>
      {name}
    </Typography>
  </Wrapper>
);

export default Tile;
