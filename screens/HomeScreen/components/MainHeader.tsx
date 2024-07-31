import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {strings} from '../../../constants/texts';
import {useTheme} from '../../../contexts/themeContext';

const MainHeader = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={{margin: theme.spacing.s, padding: theme.spacing.s}}>
        <Text
          style={[
            styles.title,
            {
              color: theme.colors.foreground,
              fontSize: theme.spacing.xl,
            },
          ]}>
          {strings.APP_NAME}
        </Text>
        <Text
          style={[
            styles.description,
            {
              color: theme.colors.foreground,
              fontSize: theme.spacing.m,
            },
          ]}>
          {strings.APP_MOTO}
        </Text>
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {},
  title: {fontSize: 32, color: '#222'},
  text: {},
  description: {},
});
