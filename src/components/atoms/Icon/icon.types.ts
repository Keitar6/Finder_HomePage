import { IconifyIconName } from '@iconify/react';
import { Getters } from '../../../types/shared.types';

export const iconsNames = ['download', 'search', 'creditCard'] as const;

export type IconName = (typeof iconsNames)[number];

export type IconItem = IconifyIconName['name'];

export type IconList = Getters<IconName, IconItem>;
