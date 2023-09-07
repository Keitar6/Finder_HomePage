import { create } from '@storybook/theming';
import { addons } from  '@storybook/addons';
import Logo from './Finder.svg';

const theme = create({
    base: 'dark',
    colorSecondary: '#4553DD',
    brandTitle: 'Bedland Storybook',
    brandUrl: '#',
    brandImage: `${Logo}`,
})

addons.setConfig({
    theme
});