import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Theme, useTheme} from '../../../contexts/themeContext';
import Icons from 'react-native-vector-icons/MaterialIcons';

interface ProfileHeaderProps {
  username: string;
  onPress: () => void;
}
const ProfileHeader = ({username, onPress}: ProfileHeaderProps) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).username}>{username}</Text>
      <Icons
        name={'menu'}
        color={theme.colors.foreground}
        size={theme.spacing.l}
        onPress={() => onPress()}
      />
    </View>
  );
};

export default ProfileHeader;

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
