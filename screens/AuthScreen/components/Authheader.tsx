import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Theme, useTheme} from '../../../contexts/themeContext';

interface AuthheaderProps {
  title: string;
  description: string;
}
const Authheader = ({title, description}: AuthheaderProps) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).title}>{title}</Text>
      <Text style={styles(theme).description}>{description}</Text>
    </View>
  );
};

export default Authheader;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      margin: theme.spacing.m,
      padding: theme.spacing.s,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    title: {
      color: theme.colors.foreground,
      fontSize: theme.spacing.xl,
      fontWeight: 'bold',
    },
    description: {color: theme.colors.foreground, fontSize: theme.spacing.m},
  });
