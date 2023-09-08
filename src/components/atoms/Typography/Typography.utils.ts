import { TypographyVariants } from '../../../theme/theme.types';

const variantToElement: TypographyVariants = {
  banner: 'h1',
  header1: 'h1',
  header2: 'h2',
  header3: 'h3',
  header4: 'h4',
  header5: 'h5',
  paragraph: 'p',
  boldParagraph: 'p',
  smallParagraph: 'p',
  largeParagraph: 'p',
} as const;

export default variantToElement;
