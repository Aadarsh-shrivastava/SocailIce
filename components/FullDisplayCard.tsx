import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Theme, useTheme} from '../contexts/themeContext';

interface FullDisplayCardProps {
  url: string;
  caption: string;
}
const FullDisplayCard = ({url, caption}: FullDisplayCardProps) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={styles(theme).container}>
      <Image
        source={{uri: url}}
        style={styles(theme).image}
        height={100}
        width={100}
      />
    </View>
  );
};

export default FullDisplayCard;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      zIndex: 1,
      justifyContent: 'center',
      top: '25%',
      alignItems: 'center',
      alignSelf: 'center',
      height: '50%',
      width: '90%',
    },
    image: {height: 500, width: '100%', borderRadius: 20},
  });
