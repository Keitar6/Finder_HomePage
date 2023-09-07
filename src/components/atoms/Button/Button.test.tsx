import { cleanup } from '@testing-library/react';
import initialTheme from '../../../theme/initialTheme';
import { BUTTONS_STYLES, getIconColor, getStyledButton } from './Button.utils';
import { BUTTON_VARIANTS, ButtonVariantProps, ColorVariant } from './Button.types';

type BasicButtonVariant = { variant: ButtonVariantProps; color: ColorVariant };

const variantsColorsVariations: BasicButtonVariant[] = [
  { variant: BUTTON_VARIANTS.primary, color: 'orange' },
  { variant: BUTTON_VARIANTS.primary, color: 'blue' },
  { variant: BUTTON_VARIANTS.primary, color: 'green' },
  { variant: BUTTON_VARIANTS.ghost, color: 'orange' },
  { variant: BUTTON_VARIANTS.ghost, color: 'blue' },
  { variant: BUTTON_VARIANTS.ghost, color: 'green' },
];

describe('Button', () => {
  afterEach(cleanup);

  describe('Utils functions', () => {
    describe('getStyledButton', () => {
      test.each(variantsColorsVariations)(
        'Returns correct button style and styling for $color $variant button',
        ({ variant, color }) => {
          expect(getStyledButton(variant, color)).toEqual(BUTTONS_STYLES[variant](color));
        },
      );
    });

    describe('getIconColor', () => {
      it('Returns correct color key for matching color value from the palette', () => {
        const colorName = 'orangeDark';
        const iconColor = getIconColor(initialTheme.palette[colorName]);
        expect(iconColor).toEqual(colorName);
      });
    });
  });
});
