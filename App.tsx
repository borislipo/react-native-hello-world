import React from 'react';
import {ContadorScreen} from './src/screens/contadorScreen';
import { BoxObjectModel } from './src/screens/boxObjectModel';
import { SafeAreaView } from 'react-native';
import { DimensionesScreen } from './src/screens/dimensionesScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <DimensionesScreen />
    </SafeAreaView>
  )
};
