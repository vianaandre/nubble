import {createText} from '@shopify/restyle';
import React from 'react';
import {TextStyle} from 'react-native';
import {Theme} from '../../theme/theme';

const SRText = createText<Theme>();
type SRTextProps = React.ComponentProps<typeof SRText>;

type TextProps = SRTextProps & {
  preset?: TextVariants;
  italic?: boolean;
  bold?: boolean;
  semiBold?: boolean;
};

export function Text({
  children,
  preset = 'paragraphMedium',
  italic,
  bold,
  semiBold,
  style,
  ...srTextProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, italic, bold, semiBold);

  return (
    <SRText style={[$fontSizes[preset], {fontFamily}, style]} {...srTextProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(
  preset: TextVariants,
  italic?: boolean,
  bold?: boolean,
  semiBold?: boolean,
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold;
  }

  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    case semiBold && italic:
      return $fontFamily.mediumItalic;
    case semiBold:
      return $fontFamily.medium;
    default:
      return $fontFamily.light;
  }
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'caption'
  | 'captionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  caption: {fontSize: 12, lineHeight: 16.8},
  captionSmall: {fontSize: 10, lineHeight: 14},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},
};

export const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-regular',
};
