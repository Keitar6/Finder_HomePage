import { create } from '@storybook/theming';
import { addons } from '@storybook/addons';
import Logo from '../src/assets/img/Finder.svg';

const theme = create({
  base: 'dark',
  colorSecondary: '#4553DD',
  brandTitle: 'Finder Storybook',
  brandUrl: '#',
  brandImage: `${Logo}`,
});

addons.setConfig({
  theme,
});
