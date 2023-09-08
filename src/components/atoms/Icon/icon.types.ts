import { IconifyIconName } from '@iconify/react';
import { Getters } from '../../../types/shared.types';

export const CountriesIcons = ['Australia', 'United States', 'Canada', 'United Kingdom'] as const;

export type CountryIcon = (typeof CountriesIcons)[number];

export const iconsNames = [
  'download',
  'search',
  'creditCard',
  'bell',
  'remove',
  'tag',
  'arrow',
  ...CountriesIcons,
] as const;

export type IconName = (typeof iconsNames)[number];

export type IconItem = IconifyIconName['name'];

export type IconList = Getters<IconName, IconItem>;
