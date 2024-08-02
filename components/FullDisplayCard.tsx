import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Theme, useTheme} from '../contexts/themeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface FullDisplayCardProps {
  url: string;
  caption: string;
}

const FullDisplayCard = ({url, caption}: FullDisplayCardProps) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={styles(theme).container}>
      <Image source={{uri: url}} style={styles(theme).image} />
      <View style={styles(theme).footer}>
        <View style={styles(theme).iconContainer}>
          <Icon name="favorite-border" size={28} color="black" />
          <Icon
            name="comment"
            size={28}
            color="black"
            style={styles(theme).icon}
          />
          <Icon name="send" size={28} color="black" />
        </View>
        <Text style={styles(theme).caption}>{caption}</Text>
      </View>
    </View>
  );
};

export default FullDisplayCard;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginBottom: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      overflow: 'hidden',
      borderColor: '#ddd',
      borderWidth: 1,
      width: 350,
    },
    image: {
      width: '100%',
      height: 400,
    },
    footer: {
      padding: 10,
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5,
      width: '90%',
    },
    icon: {
      marginHorizontal: 10,
    },
    caption: {
      color: 'black',
      fontSize: 14,
    },
  });
