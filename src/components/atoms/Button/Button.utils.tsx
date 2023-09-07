import initialTheme from '../../../theme/initialTheme';
import { colorNames, ColorNames, HexColor } from '../../../theme/theme.types';
import {
  ButtonsStyleValueType,
  ButtonVariantProps,
  BUTTON_VARIANTS,
  ButtonsStyles,
  ColorVariants,
  ColorVariant,
  StylingProperty,
} from './Button.types';
import * as Styled from './Button.styled';

export const COLOR_VARIANTS: ColorVariants = {
  orange: {
    primary: {
      bckgColor: initialTheme.palette.orangeDark,
      borderColor: initialTheme.palette.orangeDark,
      color: initialTheme.palette.light,
      hoverBckgColor: initialTheme.palette.orangeLight,
      hoverBorderColor: initialTheme.palette.orangeLight,
    },
    ghost: {
      bckgColor: 'transparent',
      borderColor: initialTheme.palette.orangeDark,
      color: initialTheme.palette.orangeDark,
      hoverBckgColor: `${initialTheme.palette.orangeDark}1A`,
      hoverBorderColor: initialTheme.palette.orangeDark,
    },
    hoverReverse: {
      bckgColor: 'transparent',
      borderColor: initialTheme.palette.orangeDark,
      color: initialTheme.palette.orangeDark,
      hoverBckgColor: initialTheme.palette.orangeDark,
      hoverBorderColor: initialTheme.palette.orangeDark,
      hoverColor: initialTheme.palette.light,
    },
  },

  blue: {
    primary: {
      bckgColor: initialTheme.palette.blueDark,
      borderColor: initialTheme.palette.blueDark,
      color: initialTheme.palette.light,
      hoverBckgColor: initialTheme.palette.blueDark,
      hoverBorderColor: initialTheme.palette.blueDark,
    },
    ghost: {
      bckgColor: 'transparent',
      borderColor: initialTheme.palette.blueDark,
      color: initialTheme.palette.blueDark,
      hoverBckgColor: 'transparent',
      hoverBorderColor: initialTheme.palette.blueDark,
    },
    hoverReverse: {
      bckgColor: 'transparent',
      borderColor: initialTheme.palette.blueDark,
      color: initialTheme.palette.blueDark,
      hoverBckgColor: initialTheme.palette.blueDark,
      hoverBorderColor: initialTheme.palette.blueDark,
      hoverColor: initialTheme.palette.light,
    },
  },
  green: {
    primary: {
      bckgColor: initialTheme.palette.greenLight,
      borderColor: initialTheme.palette.greenLight,
      color: initialTheme.palette.text,
      hoverColor: initialTheme.palette.text,
      hoverBckgColor: initialTheme.palette.greenLight,
      hoverBorderColor: initialTheme.palette.greenLight,
    },
    ghost: {
      bckgColor: 'transparent',
      borderColor: initialTheme.palette.greenLight,
      color: initialTheme.palette.greenLight,
      hoverBckgColor: 'transparent',
      hoverBorderColor: initialTheme.palette.greenLight,
    },
    hoverReverse: {
      bckgColor: 'transparent',
      borderColor: initialTheme.palette.greenLight,
      color: initialTheme.palette.greenLight,
      hoverBckgColor: initialTheme.palette.greenLight,
      hoverBorderColor: initialTheme.palette.greenLight,
      hoverColor: initialTheme.palette.light,
    },
  },
};

export const BUTTONS_STYLES: ButtonsStyles<typeof Styled.PrimaryButton> = {
  primary: (color) => ({
    StyledButton: Styled.PrimaryButton,
    styling: COLOR_VARIANTS[color][BUTTON_VARIANTS.primary] as StylingProperty,
  }),
  ghost: (color) => ({
    StyledButton: Styled.GhostButton,
    styling: COLOR_VARIANTS[color][BUTTON_VARIANTS.ghost] as StylingProperty,
  }),
  hoverReverse: (color) => ({
    StyledButton: Styled.HoverReverseButton,
    styling: COLOR_VARIANTS[color][BUTTON_VARIANTS.hoverReverse] as StylingProperty,
  }),
};

export const getStyledButton = (
  variant: ButtonVariantProps,
  color: ColorVariant,
): ButtonsStyleValueType<typeof Styled.PrimaryButton> => BUTTONS_STYLES[variant](color);

export const getIconColor = (color: HexColor): ColorNames =>
  colorNames.find((key) => initialTheme.palette[key] === color) as ColorNames;
