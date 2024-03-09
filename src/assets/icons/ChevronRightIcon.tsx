import React from 'react';
import {IconBaseProps} from '../../components/Icon/Icon';
import {Path, Svg} from 'react-native-svg';

export function ChevronRightIcon({color, size}: IconBaseProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M7 4L14 10L7 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
