import React from 'react';
import {ScrollView, View} from 'react-native';

type Props = {
  children: React.ReactNode;
  backgroundColor: string;
};

export function ScrollViewContainer({backgroundColor, children}: Props) {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={{backgroundColor}}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({backgroundColor, children}: Props) {
  return <View style={{backgroundColor}}>{children}</View>;
}
