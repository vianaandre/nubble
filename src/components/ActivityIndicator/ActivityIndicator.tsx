import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';

type ActivityIndicatorProps = Omit<RNActivityIndicatorProps, 'color'> & {
  color: ThemeColors;
};

export function ActivityIndicator({
  color,
  ...rnActivityIndicator
}: ActivityIndicatorProps) {
  const {colors} = useAppTheme();

  return <RNActivityIndicator color={colors[color]} {...rnActivityIndicator} />;
}
