import React from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

interface FabProps {
  title: string;
  onPress: () => void;
  position?: 'br' | 'bl';
}

export const Fab = ({title, onPress, position = 'br'}: FabProps) => {

    const ios = () => {
        return (
            <TouchableOpacity
             style={position === 'br' ? styles.fabBR : styles.fabBL} 
             onPress={onPress}
             >
            <View >
                <Text style={styles.fabTitle}>{title}</Text>
            </View>
            </TouchableOpacity>
        );
    }

    const android = () => {
        return (
            <View
            style={position === 'br' ? styles.fabBR : styles.fabBL}
            >
              <TouchableNativeFeedback 
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple('blue', false, 30)}
                >
                <View>
                  <Text style={styles.fabTitle}>{title}</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          );
    }
  return(Platform.OS === 'ios' ? ios() : android());
};

const styles = StyleSheet.create({
  fabBR: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: 'lightblue',
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  fabBL: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    left: 20,
    bottom: 20,
    backgroundColor: 'lightblue',
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  fabTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
