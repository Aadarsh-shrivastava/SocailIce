import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {users} from '../../../data/UserData';
import {useTheme} from '../../../contexts/themeContext';
const Bio = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.username, {color: theme.colors.foreground}]}>
        {users[0].username}
      </Text>
      <Text style={[styles.bio, {color: theme.colors.foreground}]}>
        'long paragraph long paragraphlong paragraph '
      </Text>
    </View>
  );
};

export default Bio;

const styles = StyleSheet.create({
  container: {marginHorizontal: 20, marginVertical: 10, alignItems: 'center'},
  bio: {marginHorizontal: 60},
  username: {fontSize: 18, color: 'black'},
});
