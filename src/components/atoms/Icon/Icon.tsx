import { useContext } from 'react';
import { ThemeContext } from '../../../theme/ThemeContext';
import { ColorNames } from '../../../theme/theme.types';
import { IconName } from './icon.types';
import { Icon as IconifyIcon } from '@iconify/react';
import { ICONS_NAMES } from './icons.utils';
import styled from 'styled-components';

export type IconProps = {
  name: IconName;
  color?: ColorNames;
  size?: number;
};

const CustomIcon = styled(IconifyIcon)`
  min-width: 24px;
  min-height: 24px;
`;

const Icon = ({ name = 'download', size = 28, color = 'blueDark' }: IconProps) => {
  const { palette } = useContext(ThemeContext);

  return (
    <CustomIcon
      icon={ICONS_NAMES[name]}
      color={palette[color]}
      min={24}
      width={size}
      height={size}
    />
  );
};

export default Icon;
