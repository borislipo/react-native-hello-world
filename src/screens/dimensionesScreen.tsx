import React from 'react';
import {Text, View, StyleSheet, Dimensions, useWindowDimensions} from 'react-native';

//const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {

  const {width, height} = useWindowDimensions();
  return (
    <View>
       <View>
      <Text>Dimensiones screen</Text>
    </View>
    <View>
      <Text>Ancho: {width}</Text>
      <Text>Alto: {height}</Text>
    </View>
    </View>
  );
   
};
