import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Theme, useTheme} from '../contexts/themeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ScreenHeaderProps {
  title: string;
  onPress: () => void;
  icon: string;
}

const ScreenHeader = ({title, onPress, ...rest}: ScreenHeaderProps) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).username}>{title}</Text>
      {rest.icon && (
        <Icon name={'menu'} size={theme.spacing.l} onPress={() => onPress()} />
      )}
    </View>
  );
};

export default ScreenHeader;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: theme.spacing.m,
      backgroundColor: theme.colors.background,
    },
    username: {fontSize: theme.spacing.l, color: theme.colors.foreground},
  });
