import { PropsWithChildren, useState } from 'react';
import Icon from '../Icon/Icon';
import { IsIconNullGuard, ButtonProps, BUTTON_VARIANTS } from './Button.types';
import { getStyledButton, getIconColor } from './Button.utils';

const Button = ({
  variant = BUTTON_VARIANTS.primary,
  color = 'blue',

  icon = null,
  iconSize = 20,
  iconColor,
  children,
  ...otherProps
}: PropsWithChildren<ButtonProps>) => {
  const { StyledButton, styling } = getStyledButton(variant, color);
  const defaultIconColor = iconColor || getIconColor(styling.color);
  const [iconClr] = useState(defaultIconColor);

  return (
    <StyledButton styling={{ ...styling }} {...otherProps}>
      {!IsIconNullGuard(icon) ? <Icon name={icon} size={iconSize} color={iconClr} /> : null}

      {children}
    </StyledButton>
  );
};

export default Button;
