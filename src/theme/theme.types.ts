import { CSSProperties } from 'react';
import { Getters } from '../types/shared.types';

export const colorNames = [
  'blueDark',
  'blueLight',
  'orangeLight',
  'orangeDark',
  'light',
  'greenLight',
  'greenDark',
  'redLight',
  'redDark',
  'footer',
  'white',

  'notificationGreyHover',
  'notificationGrey',
  'inputGrey',
  'iconInputGrey',

  'text',
  'textGrey',
  'yellow',
] as const;

export const typographyNames = [
  'banner',
  'header1',
  'header2',
  'header3',
  'header4',
  'header5',
  'paragraph',
  'boldParagraph',
  'smallParagraph',
] as const;

const typographyTypes = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export type ColorNames = (typeof colorNames)[number];
export type HexColor = `#${string}`;

export type PaletteType = Getters<ColorNames, HexColor>;

export type TypographyName = (typeof typographyNames)[number];

type TypographyTypes = (typeof typographyTypes)[number];

export type TypographyVariants = { [key in TypographyName]: TypographyTypes };

export type TypographyType = Getters<TypographyName, CSSProperties>;

export type Theme = {
  palette: PaletteType;
  typography: TypographyType;
};

export type Palette = Pick<Theme, 'palette'>;
