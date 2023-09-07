import { CSSProperties, PropsWithChildren, useContext } from 'react';
import { ThemeContext } from '../../../theme/ThemeContext';
import { TypographyProps } from './Typography.types';
import variantToElement from './Typography.utils';

const Typography = ({
  variant = 'paragraph',
  style,
  color = 'text',
  children,
}: PropsWithChildren<TypographyProps>) => {
  const { palette, typography } = useContext(ThemeContext);
  const Element = variantToElement[variant];

  const colorStyles: CSSProperties = {
    color: palette[color],
  };

  return (
    <Element
      style={{
        ...typography[variant],
        ...colorStyles,
        ...style,
      }}
    >
      {children}
    </Element>
  );
};

export default Typography;
