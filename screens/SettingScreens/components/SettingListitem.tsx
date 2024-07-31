import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Theme, useTheme} from '../../../contexts/themeContext';

interface SettingListitemProps {
  title: string;
  onPress: () => void;
}
const SettingListitem = ({title, onPress}: SettingListitemProps) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text style={styles(theme).text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SettingListitem;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {backgroundColor: theme.colors.background, height: '100%'},
    text: {
      color: theme.colors.foreground,
      margin: theme.spacing.s,
      padding: theme.spacing.s,
    },
  });
