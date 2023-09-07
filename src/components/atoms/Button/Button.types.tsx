import { ButtonHTMLAttributes } from 'react';
import { ColorNames, HexColor } from '../../../theme/theme.types';
import { IconName } from '../Icon/icon.types';

export const ButtonVariants = ['primary', 'ghost'] as const;
export const buttonColors = ['blue', 'green', 'orange'] as const;

type ButtonVariantsType = {
  [key in (typeof ButtonVariants)[number]]: key;
};
export const BUTTON_VARIANTS: ButtonVariantsType = {
  primary: 'primary',
  ghost: 'ghost',
} as const;

export type ColorVariant = (typeof buttonColors)[number];

export type ButtonVariantProps = (typeof ButtonVariants)[number];

export type IconProps = { icon?: IconName | null; iconSize?: number; iconColor?: ColorNames };

type BasicProps<T extends ButtonVariantProps> = {
  variant: T;
  hoverColor?: ColorNames;
  color?: ColorVariant;
};

export type PrimaryButtonProps = BasicProps<typeof BUTTON_VARIANTS.primary> & IconProps;

export type GhostButtonProps = BasicProps<typeof BUTTON_VARIANTS.ghost> & IconProps;

export type ButtonProps = (PrimaryButtonProps | GhostButtonProps) &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type HoverProperties = {
  hoverColor: HexColor;
  hoverBckgColor: HexColor | 'transparent';
  hoverBorderColor: HexColor | 'transparent';
};

export type StylingProperty = {
  bckgColor: HexColor | 'transparent';
  borderColor: HexColor | 'transparent';
  color: HexColor;
  pressedBckgColor?: HexColor | 'transparent';
  pressedBorderColor?: HexColor | 'transparent';
} & Partial<HoverProperties>;

export type StylingProps = {
  styling: StylingProperty;
};

export type ColorVariants = {
  [color in ColorVariant]: {
    [variant in ButtonVariantProps]?: StylingProperty;
  };
};

export type ButtonsStyleValueType<T> = {
  StyledButton: T;
} & StylingProps;

export type ButtonsStyles<T> = {
  [key2 in ButtonVariantProps]: (color: ColorVariant) => ButtonsStyleValueType<T>;
};

export type ButtonsStyleType<T> = {
  [key in keyof ButtonVariantsType]: ButtonsStyleValueType<T>;
};

export const IsIconNullGuard = (icon: null | IconName): icon is null => icon === null;

export type AddHoverProps = {
  hoverColor: ColorNames;
  styling: StylingProperty;
};
