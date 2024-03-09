import React from 'react';
import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {buttonPresets} from './buttonPresets';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

export type ButtonPreset = 'primary' | 'outline';

type ButtonProps = TouchableOpacityBoxProps & {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
};

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset =
    buttonPresets[preset][disabled || loading ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      disabled={disabled || loading}
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s12"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
